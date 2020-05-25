import { NextFunction, Request, Response } from 'express';
import React, { ComponentType } from 'react';
import { renderToStaticNodeStream, renderToString } from 'react-dom/server';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { HTML } from '../../components/HTML';
import { createNetworkEnvironment } from '../../relay';
import { Environment } from 'react-relay';

type PrefetchComponentDataOptions = {
    relayEnvironment: ReturnType<typeof createNetworkEnvironment>;
};

export class BaseController {
    constructor(public req: Request, public res: Response, public next: NextFunction) {}

    public async renderComponent<TProps extends {}>(Component: ComponentType<TProps>, props: TProps) {
        const relayEnvironment = createNetworkEnvironment({
            endpoint: 'http://localhost:3301',
            shouldCollectRequests: true,
        });
        const { environment } = relayEnvironment;

        await this.prefetchComponentData(Component, props, {
            relayEnvironment,
        });

        this.res.write('<!doctype HTML>');

        const stream = renderToStaticNodeStream(
            <RelayEnvironmentProvider environment={environment}>
                <HTML>
                    <Component {...props} />
                </HTML>
            </RelayEnvironmentProvider>,
        );

        stream.pipe(this.res);
    }

    private async prefetchComponentData<TProps extends {}>(
        Component: ComponentType<TProps>,
        props: TProps,
        { relayEnvironment: { environment, hasFlyingRequests, loadFlyingRequests } }: PrefetchComponentDataOptions,
    ) {
        let prefetchTimesLeft = 5;

        while ((prefetchTimesLeft -= 1)) {
            renderToString(
                <RelayEnvironmentProvider environment={environment}>
                    <Component {...props} />
                </RelayEnvironmentProvider>,
            );

            if (hasFlyingRequests) {
                await loadFlyingRequests();
            }
        }
    }
}
