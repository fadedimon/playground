import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

import { queries } from './queries';

const { HTTP_PORT } = process.env;

const app = express();

const typeDefs = gql`
    type Author {
        id: String
        login: String
        displayName: String
    }

    type Query {
        author(id: String!): Author
        authors: [Author]
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: queries,
    },
});

app.use((req, res, next) => {
    console.log('Incoming request');
    next();
});

server.applyMiddleware({ app, path: '/' });

app.listen(Number(HTTP_PORT), () => {
    console.log(`🚀 Apollo Graphql server is running at http://localhost:${HTTP_PORT}`);
});
