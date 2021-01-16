import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './graphql';

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`Listsning on port http://localhost:${PORT}/graphql`),
);
