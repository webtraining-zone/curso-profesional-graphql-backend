// Public facing API (not get confused with the "Prisma" schema)
module.exports = {
  typeDefs: `
  type Book {
    id: ID! @unique
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
    createBook(title: String): Book
  }
  
  type Query {
    books: [Book]!
  }`
};
