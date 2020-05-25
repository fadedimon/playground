import { graphql } from 'react-relay';

export const AuthorsListQuery = graphql`
    query AuthorsListQuery {
        authors {
            id
            login
            displayName
        }
    }
`;
