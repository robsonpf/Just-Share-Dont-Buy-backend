'use strict'


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reservations').del()
    .then(() => knex('items').del())
    .then(() => knex('categories').del())
    .then(() => knex('users').del())
};