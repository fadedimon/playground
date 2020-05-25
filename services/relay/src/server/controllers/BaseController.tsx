import { NextFunction, Request, Response } from 'express';
import React, { ComponentType } from 'react';
import { renderToStaticNodeStream, renderToString } from 'react-dom/server';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { HTML } from '../../components/HTML';
import { createNetworkEnvironment } from '../../relay';

type RenderComponentOPtions<T> = {
    componentProps: T;
    preloadQueryDepth?: number;
};

type PreloadParams = {
    relayServerEnvironment: ReturnType<typeof createNetworkEnvironment>;
};

const DEFAULT_PRELOAD_QUERY_DEPTH = 5;

export class BaseController {
    constructor(public req: Request, public res: Response, public next: NextFunction) {}

    public async renderComponent<T extends {}>(Component: ComponentType<T>, options: RenderComponentOPtions<T>) {
        const { componentProps, preloadQueryDepth } = options;
        const relayServerEnvironment = createNetworkEnvironment({
            endpoint: 'http://localhost:3301',
            shouldCollectRequests: true,
        });

        const { environment } = relayServerEnvironment;

        await this.preloadComponentData(Component, {
            componentProps,
            relayServerEnvironment,
            preloadQueryDepth: preloadQueryDepth || DEFAULT_PRELOAD_QUERY_DEPTH,
        });

        const stream = renderToStaticNodeStream(
            <RelayEnvironmentProvider environment={environment}>
                <HTML>
                    <Component {...componentProps} />
                </HTML>
            </RelayEnvironmentProvider>,
        );

        this.res.status(200);
        this.res.write('<!doctype HTML>');
        stream.pipe(this.res);
    }

    private async preloadComponentData<T extends {}>(Component, options: RenderComponentOPtions<T> & PreloadParams) {
        const {
            componentProps,
            relayServerEnvironment: { environment, hasFlyingRequests, loadFlyingRequests },
        } = options;

        let { preloadQueryDepth } = options;

        while ((preloadQueryDepth -= 1)) {
            renderToString(
                <RelayEnvironmentProvider environment={environment}>
                    <Component {...componentProps} />
                </RelayEnvironmentProvider>,
            );

            if (hasFlyingRequests) {
                await loadFlyingRequests();
            }
        }
    }
}
