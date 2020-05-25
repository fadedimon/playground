import React, { ComponentPropsWithoutRef } from 'react';
import { withQueryRenderer } from '../../relay/withQueryRenderer';
import { AuthorPage as Component } from './AuthorPage';
import { AuthorPageQuery as query } from './AuthorPage.gql';
import { AuthorPageQueryResponse, AuthorPageQueryVariables } from './__generated__/AuthorPageQuery.graphql';

export const AuthorPage = withQueryRenderer<{ id: string }, AuthorPageQueryResponse, AuthorPageQueryVariables>({
    query,
    getVariables({ id }) {
        return { id };
    },
    renderComponent(_, { id }) {
        return <Component id={id} />;
    },
});
