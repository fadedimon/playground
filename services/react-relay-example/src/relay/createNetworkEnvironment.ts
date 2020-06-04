import fetch from 'cross-fetch';
import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';

type Options = {
    endpoint: string;
    relayRecords?: RecordMap;
    shouldCollectRequests?: boolean;
};

export const createNetworkEnvironment = ({ endpoint, relayRecords, shouldCollectRequests = false }: Options) => {
    let collectedRequests: Promise<any>[] = [];

    const fetchQuery: FetchFunction = async (operation, variables) => {
        try {
            const result = fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    variables,
                    query: operation.text,
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
            store: new Store(new RecordSource(relayRecords)),
            network: Network.create(fetchQuery),
        }),
        getPendingRequestsCount() {
            return collectedRequests.length;
        },
        async loadPendingRequests() {
            await Promise.all(collectedRequests);

            collectedRequests.length = 0;
        },
    };
};
