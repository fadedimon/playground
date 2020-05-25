import React, { FunctionComponent } from 'react';
import { Author } from '../../components/Author';

type Props = {
    id: string;
};

export const AuthorPage: FunctionComponent<Props> = ({ id }) => {
    return (
        <div>
            Author {id}
            <Author id={id} />
        </div>
    );
};
