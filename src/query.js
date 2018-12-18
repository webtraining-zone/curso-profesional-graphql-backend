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
  currentUser(parent, args, context, info) {
    if (!context.request.userId) {
      return null;
    }

    return context.db.query.user({
      where: {id: context.request.userId},
    }, info);
  },
};

module.exports = Query;
