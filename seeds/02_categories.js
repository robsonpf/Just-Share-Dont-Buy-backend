'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('categories').insert({
      id: 1,
      name: 'Space'
    }),
    knex('categories').insert({
      id: 2,
      name: 'Household Items'
    }),
    knex('categories').insert({
      id: 3,
      name: 'Sporting Goods'
    }),
    knex('categories').insert({
      id: 4,
      name: 'Miscellaneous'
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))`)
  })
};
