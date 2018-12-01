module.exports = {
  typeDefs: `
  type Book {
    title: String!
  }
  
  type User {
    id: ID!
    name: String!
  }
  
  type Mutation {
    createBook(title: String): Book
  }
  
  type Query {
    books: [Book]!
  }`
};
