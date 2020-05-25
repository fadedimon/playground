import { graphql } from 'react-relay';

export const AuthorPageQuery = graphql`
    query AuthorPageQuery($id: String!) {
        author(id: $id) {
            login
        }
    }
`;
