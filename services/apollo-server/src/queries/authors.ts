import { Query, WithPaging } from './_types';
import { Author, AUTHORS } from '../_data';

export const authors: Query<Author[], WithPaging> = () => {
    console.log('authors query');
    return AUTHORS;
};
