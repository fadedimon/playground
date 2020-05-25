import React, { FunctionComponent } from 'react';
import { graphql, Variables } from 'react-relay';
import { FetchPolicy, useQuery } from 'relay-hooks';

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const DEFAULT_OPTIONS = {
    fetchPolicy: 'store-or-network' as FetchPolicy,
};

const defaultGetVariables = () => {};

const isFunction = (func: Function | void) => {
    return typeof func === 'function';
};

export const withQueryRenderer = <TProps extends {}, TQueryResponse extends {}, TQueryVars extends Variables>(options: {
    query: ReturnType<typeof graphql>;
    getVariables?(props: TProps): TQueryVars;
    renderComponent: (queryResult: DeepWriteable<TQueryResponse>, hocProps: TProps) => JSX.Element;
    renderLoading?: () => JSX.Element;
    renderError?: (err: Error) => JSX.Element;
}) => {
    const { query, renderError, renderLoading, renderComponent, getVariables = defaultGetVariables } = options;

    const WithQueryRenderer: FunctionComponent<TProps> = (hocProps) => {
        const { props: queryResult, error } = useQuery(query, getVariables(hocProps), DEFAULT_OPTIONS);

        console.log(queryResult);

        if (error) {
            return isFunction(renderError) ? renderError(error) : <div>error</div>;
        } else if (!queryResult || Object.keys(queryResult).length === 0) {
            return isFunction(renderLoading) ? renderLoading() : <div>loading...</div>;
        }

        return renderComponent(queryResult, hocProps);
    };

    return WithQueryRenderer;
};
