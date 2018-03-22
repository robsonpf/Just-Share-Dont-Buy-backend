'use strict'


exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert({
      id: 1,
      name: 'Jon Riemer',
      phone: '216-534-7689',
      email: 'Jriemer@gmail.com'
    }),
    knex('users').insert({
      id: 2,
      name: 'Randy Carlisle',
      phone: '312-656-2213',
      email: 'Rcarlisle@yahoo.com'
    }),
    knex('users').insert({
      id: 3,
      name: 'Robson Farias',
      phone: '512-654-9921',
      email: 'Rfarias@hotmail.com'
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}