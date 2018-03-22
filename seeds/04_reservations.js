'use strict'

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('reservations').insert({
      id: 1,
      user_id: 1,
      item_id: 1,
      reserved: false
    }),
    knex('reservations').insert({
      id: 2,
      user_id: 2,
      item_id: 3,
      reserved: true
    }),
    knex('reservations').insert({
      id: 3,
      user_id: 3,
      item_id: 2,
      reserved: false
    }),
    knex('reservations').insert({
      id: 4,
      user_id: 1,
      item_id: 4,
      reserved: false
    }),
    knex('reservations').insert({
      id: 5,
      user_id: 3,
      item_id: 6,
      reserved: true
    }),
    knex('reservations').insert({
      id: 6,
      user_id: 2,
      item_id: 5,
      reserved: true
    }),
    knex('reservations').insert({
      id: 7,
      user_id: 3,
      item_id: 8,
      reserved: false
    }),
    knex('reservations').insert({
      id: 8,
      user_id: 3,
      item_id: 7,
      reserved: false
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('reservations_id_seq', (SELECT MAX(id) FROM reservations))`)
  })
}