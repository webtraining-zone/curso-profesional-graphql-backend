const Query = {
  // books(parent, args, context, info) {
  //   return [{title: 'You don\'t know JS'}, {title: 'Eloquent JavaScript'}];
  // },

  async books(parent, args, context, info) {
    const books = await context.db.query.books();

    return books;
  },
};

module.exports = Query;
