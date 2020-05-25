import React, { FunctionComponent } from 'react';
import { AuthorsList } from '../AuthorsList';

type Props = {
    id: string;
    login: string;
    displayName: string;
};

export const Author: FunctionComponent<Props> = ({ id, login, displayName }) => {
    return (
        <div>
            <h1>Author info</h1>
            <dl>
                <dt>ID</dt>
                <dd>{id}</dd>
                <dt>login</dt>
                <dd>{login}</dd>
                <dt>displayName</dt>
                <dd>{displayName}</dd>
            </dl>
            <h2>All authors</h2>
            <AuthorsList />
        </div>
    );
};
