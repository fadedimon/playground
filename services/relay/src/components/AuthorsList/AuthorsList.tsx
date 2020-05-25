import React, { FunctionComponent } from 'react';

type Props = {
    authors: {
        id: string;
        login: string;
        displayName: string;
    }[];
};

export const AuthorsList: FunctionComponent<Props> = ({ authors }) => {
    return (
        <ul>
            {authors.map(({ id, login, displayName }) => (
                <li key={id}>
                    <a href={`/authors/${id}`}>
                        {displayName} ({login})
                    </a>
                </li>
            ))}
        </ul>
    );
};
