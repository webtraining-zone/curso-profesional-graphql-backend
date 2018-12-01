// Remote connection to Prisma DB
const {Prisma} = require('prisma-binding');

const typeDefs = require('./../generated/prisma-client/prisma-schema').typeDefs;

const db = new Prisma({
  typeDefs: typeDefs,
  endpoint: 'https://us1.prisma.sh/alex-arriaga-5d13f1/curso-profesional-graphql-backend/dev',
  // secret: 'secret-for-our-database',
  debug: false,
});


module.exports  = db;
