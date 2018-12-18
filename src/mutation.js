const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG = require('./config');

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

  async deleteBook(parent, args, context, info) {
    const where = {id: args.id};

    // Find the book to be deleted

    const book = await context.db.query.book({where}, `{ id title}`);

    return context.db.mutation.deleteBook({where}, info);
  },

  async createUserAccount(parent, args, context, info) {
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);// Generates a SALT

    const user = await context.db.mutation.createUser({
      data: {
        ...args,
        password: password,
      },
    }, info);

    // Create token
    const token = jwt.sign({userId: user.id}, CONFIG.APP_SECRET);

    // Set the token as cookie
    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 100, // 100 days
    });

    return user;
  },

};

module.exports = Mutation;
