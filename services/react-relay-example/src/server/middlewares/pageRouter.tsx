import React from 'react';
import { renderToString } from 'react-dom/server';
import type { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { createNetworkEnvironment } from '../../relay';
import { Routes } from '../../routes';
import { createLogger, renderHtml } from '../utils';

type RenderPageOptions = {
    location: string;
};

const DEFAULT_MAX_RERENDERS_COUNT = 5;

const getDisplayTime = (time) => `${(time / 1000).toFixed(3)}s`;

const renderPage = async ({ location }: RenderPageOptions) => {
    const { environment, getPendingRequestsCount, loadPendingRequests } = createNetworkEnvironment({
        endpoint: 'https://countries.trevorblades.com/',
        shouldCollectRequests: true,
    });

    let html = '';
    let rendersCount = 0;
    let requestsCount = 0;
    let redirectUrl = null;

    const startTs = Date.now();

    while (rendersCount < DEFAULT_MAX_RERENDERS_COUNT) {
        const routerContext: StaticRouterContext = {};

        rendersCount += 1;

        html = renderToString(
            <RelayEnvironmentProvider environment={environment}>
                <StaticRouter context={routerContext} location={location}>
                    <Routes />
                </StaticRouter>
            </RelayEnvironmentProvider>,
        );

        if (routerContext.action === 'REPLACE') {
            redirectUrl = routerContext.url;

            break;
        }

        const pendingRequestsCount = getPendingRequestsCount();

        requestsCount += pendingRequestsCount;

        if (pendingRequestsCount > 0) {
            await loadPendingRequests();
        } else {
            break;
        }
    }

    return {
        html,
        redirectUrl,
        relayRecords: environment.getStore().getSource(),
        stats: {
            rendersCount,
            requestsCount,
            renderTime: Date.now() - startTs,
        },
    };
};

export const pageRouter = () => {
    const logger = createLogger('pageRouterMiddleware');

    return async (req, res, next) => {
        try {
            const log = (message: string) => {
                const { renderTime, rendersCount, requestsCount } = stats;

                logger.info(message, {
                    render_time: getDisplayTime(renderTime),
                    renders_count: rendersCount,
                    requests_count: requestsCount,
                    url: req.originalUrl,
                });
            };

            const { html, relayRecords, redirectUrl, stats } = await renderPage({
                location: req.originalUrl,
            });

            if (redirectUrl) {
                res.redirect(302, redirectUrl);

                log(`Redirected to ${redirectUrl}`);
            } else {
                res.status(200);
                res.end(
                    renderHtml({
                        html,
                        relayRecords: JSON.stringify(relayRecords),
                    }),
                );

                log(`Rendered`);
            }
        } catch (err) {
            next(err);
        }
    };
};
