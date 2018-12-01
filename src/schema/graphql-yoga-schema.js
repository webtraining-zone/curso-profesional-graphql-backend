module.exports = {
  typeDefs: `type User {
  id: ID!
  name: String!
  }
  
  type Mutation {
    fake: String
  }
  
  type Query {
    fake: String
  }`
};
