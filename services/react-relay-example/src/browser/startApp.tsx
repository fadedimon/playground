import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../routes';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { createNetworkEnvironment } from '../relay';

const getRelayRecords = () => {
    const node = document.getElementById('relayRecords');
    const json = node.innerHTML;

    return JSON.parse(json);
};

const hydrateReact = async () => {
    const { environment } = createNetworkEnvironment({
        endpoint: 'https://countries.trevorblades.com/',
        relayRecords: getRelayRecords(),
    });

    return new Promise((resolve) => {
        hydrate(
            <RelayEnvironmentProvider environment={environment}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </RelayEnvironmentProvider>,
            document.getElementById('root'),
            resolve,
        );
    });
};

export const startApp = async () => {
    try {
        await hydrateReact();
        console.log('App successfuly hydrated!');
    } catch (err) {
        console.error(err);
    }
};
