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
  
  type Mutation {
    createBook(title: String, description: String, thumbnail: String, image: String): Book
    deleteBook(id: ID!): Book
    createUserAccount(name: String!, email: String!, password: String!): User!
  }
  
  type Query {
    books: [Book]!
    book(where: BookWhereUniqueInput!): Book
    currentUser: User
  }`,
};
