const Query = {
  books(parent, args, context, info) {
    return [{title: 'You don\'t know JS'}, {title: 'Eloquent JavaScript'}];
  },
};

module.exports = Query;
