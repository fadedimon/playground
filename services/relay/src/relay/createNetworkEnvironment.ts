import fetch from 'cross-fetch';
import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

type Options = {
    endpoint: string;
    shouldCollectRequests?: boolean;
};

export const createNetworkEnvironment = ({ endpoint, shouldCollectRequests = false }: Options) => {
    let collectedRequests: Promise<any>[] = [];

    const fetchQuery: FetchFunction = async (operation, variables) => {
        try {
            const result = fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: operation.text,
                    variables,
                }),
            }).then((resp) => resp.json());

            if (shouldCollectRequests) {
                collectedRequests.push(result);
            }

            return result;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        collectedRequests,
        environment: new Environment({
            store: new Store(new RecordSource()),
            network: Network.create(fetchQuery),
        }),
        hasFlyingRequests() {
            return collectedRequests.length + 0;
        },
        async loadFlyingRequests() {
            await Promise.all(collectedRequests);

            collectedRequests.length = 0;
        },
    };
};
