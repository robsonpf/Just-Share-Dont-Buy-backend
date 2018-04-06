'use strict'

const crypto = require('crypto')
const hash = crypto.createHash('sha256');
const testPassword = 'welcome1'
hash.update(testPassword);
var hashedTestPassword = hash.digest('hex')

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert({
      id: 1,
      name: 'Jon Riemer',
      phone: '216-534-7689',
      email: 'Jriemer@gmail.com',
      password: hashedTestPassword
    }),
    knex('users').insert({
      id: 2,
      name: 'Randy Carlisle',
      phone: '312-656-2213',
      email: 'Rcarlisle@yahoo.com',
      password: hashedTestPassword
    }),
    knex('users').insert({
      id: 3,
      name: 'Robson Farias',
      phone: '512-654-9921',
      email: 'Rfarias@hotmail.com',
      password: hashedTestPassword
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
