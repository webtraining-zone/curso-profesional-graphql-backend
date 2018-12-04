const Mutation = {
  async createBook(parent, args, context, info) {
    // Create our actual book
    // console.log(args.title);

    // We will have a mutation to be called as this:
    // mutation {
    //   createBook(
    //       title:"JavaScript the Good Parts"
    // ) {
    //     title
    //   }
    // }

    // @TODO: this operation would only be available for authenticated users
    const book = await context.db.mutation.createBook({
      data: {
        ...args, // title: args.title, etc.
      },
    }, info);

    return book;
  },

};

module.exports = Mutation;
