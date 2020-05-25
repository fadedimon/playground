import React, { FunctionComponent } from 'react';
import { AuthorsList } from '../../components/AuthorsList';

export const AuthorsPage: FunctionComponent = () => {
    return (
        <div>
            <h1>Authors:</h1>
            <AuthorsList />
        </div>
    );
};
