'use strict'

const bcrypt = require("bcryptjs");

var dummy_pass = "Letmein123*";
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(dummy_pass, salt)

exports.seed = (knex, Promise) => {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert({
      id: 1,
      name: 'Jon Riemer',
      phone: '216-534-7689',
      email: 'Jriemer@gmail.com',
      password: "welcome1"
    }),
    knex('users').insert({
      id: 2,
      name: 'Randy Carlisle',
      phone: '312-656-2213',
      email: 'Rcarlisle@yahoo.com',
      password: "welcome1"
    }),
    knex('users').insert({
      id: 3,
      name: 'Robson Farias',
      phone: '512-654-9921',
      email: 'Rfarias@hotmail.com',
      password: "welcome1"
    })
  ]).then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  })
}
