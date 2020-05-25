import React, { FunctionComponent } from 'react';
import { Author } from '../../components/Author';
import { AuthorsList } from '../../components/AuthorsList';

type Props = {
    id: string;
};

export const AuthorPage: FunctionComponent<Props> = ({ id }) => {
    return (
        <div>
            <h2>Author #{id}</h2>
            <Author id={id} />
            <h2>All authors</h2>
            <AuthorsList />
        </div>
    );
};
