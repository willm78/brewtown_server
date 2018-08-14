const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./schema.graphql');
const schema = makeExecutableSchema({ typeDefs })
const server = new ApolloServer({
  schema,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});