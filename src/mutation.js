const Mutation = {
  createBook(parent, args, context, info) {
    // Create our actual book
    console.log(args.title);
  },
};

module.exports = Mutation;
