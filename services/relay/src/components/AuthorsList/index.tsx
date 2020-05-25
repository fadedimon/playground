import React, { ComponentPropsWithoutRef } from 'react';
import { withQueryRenderer } from '../../relay/withQueryRenderer';
import { AuthorsList as Component } from './AuthorsList';
import { AuthorsListQuery as query } from './AuthorsList.gql';
import { AuthorsListQueryResponse, AuthorsListQueryVariables } from './__generated__/AuthorsListQuery.graphql';

export const AuthorsList = withQueryRenderer<{}, AuthorsListQueryResponse, AuthorsListQueryVariables>({
    query,
    renderComponent({ authors }) {
        return <Component authors={authors} />;
    },
});
