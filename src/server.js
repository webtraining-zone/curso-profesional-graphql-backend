const {GraphQLServer} = require('graphql-yoga');

const Mutation = require('./mutation');
const Query = require('./query');
const db = require('./database');

// const typeDefs = require('./../generated/prisma-client/prisma-schema.js').typeDefs;
// const typeDefs = require('./schema/graphql-yoga-schema').typeDefs;
const resolvers = {
  Query,
  Mutation,
};

const createServer = () => {
  return new GraphQLServer({
    // typeDefs,
    typeDefs: 'src/schema/graphql-yoga-schema.graphql',
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    // Expose the database to ALL the requests
    context: request => ({...request, db}),
  });
};

module.exports = createServer;
