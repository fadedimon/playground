import { Author, AUTHORS } from '../_data';
import { Query } from './_types';

export const author: Query<Author, { id: string }> = (_, { id }) => {
    console.log('author query');

    return AUTHORS.find((author) => author.id === id);
};
