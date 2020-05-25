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
            <dl>
                <dt>ID</dt>
                <dd>{id}</dd>
                <dt>login</dt>
                <dd>{login}</dd>
                <dt>displayName</dt>
                <dd>{displayName}</dd>
            </dl>
        </div>
    );
};
