import { graphql } from 'react-relay';
import { QueryOptions, useQuery as useOrigQuery } from 'relay-hooks';

const DEFAULT_OPTIONS: QueryOptions = {
    fetchPolicy: 'store-or-network',
};

export const useQuery = <TResult extends {}, TVars extends {}>(
    query: ReturnType<typeof graphql>,
    vars: TVars,
    options: QueryOptions = DEFAULT_OPTIONS,
) => {
    const { props, cached, ...rest } = useOrigQuery(query, vars, options);

    return {
        ...rest,
        isCached: cached,
        data: props as TResult,
    };
};
