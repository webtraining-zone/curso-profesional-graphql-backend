// Public facing API (not get confused with the "Prisma" schema)
module.exports = {
  typeDefs: `
  scalar DateTime
  
  type Book {
    id: ID!
    title: String!
    description: String
    image: String
    thumbnail: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type User {
    id: ID!
    name: String!
  }
  
  type Mutation {
    createBook(title: String, description: String, thumbnail: String, image: String): Book
  }
  
  type Query {
    books: [Book]!
  }`,
};
