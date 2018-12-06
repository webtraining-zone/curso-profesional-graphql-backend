const {forwardTo} = require('prisma-binding');

const Query = {
  // books(parent, args, context, info) {
  //   return [{title: 'You don\'t know JS'}, {title: 'Eloquent JavaScript'}];
  // },

  // Custom code
  // async books(parent, args, context, info) {
  //   const books = await context.db.query.books();
  //
  //   return books;
  // },

  // ForwardTo the default query definitions
  books: forwardTo('db'),
  book: forwardTo('db'),
};

module.exports = Query;
