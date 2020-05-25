import React, { ComponentPropsWithoutRef } from 'react';
import { withQueryRenderer } from '../../relay/withQueryRenderer';
import { Author as Component } from './Author';
import { AuthorQuery as query } from './Author.gql';
import { AuthorQueryResponse, AuthorQueryVariables } from './__generated__/AuthorQuery.graphql';

export const Author = withQueryRenderer<{ id: string }, AuthorQueryResponse, AuthorQueryVariables>({
    query,
    getVariables({ id }) {
        return { id };
    },
    renderComponent({ author }) {
        return <Component {...author} />;
    },
});
