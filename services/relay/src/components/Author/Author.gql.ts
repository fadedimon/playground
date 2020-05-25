import { graphql } from 'react-relay';

export const AuthorQuery = graphql`
    query AuthorQuery($id: String!) {
        author(id: $id) {
            id
            login
            displayName
        }
    }
`;
