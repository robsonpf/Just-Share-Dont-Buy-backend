const knex = require('./db')

function getAllReservations() {
  return knex('reservations')
}

function getAllReservationsWithUsers() {
  return knex('reservations')
  .join('users', 'reservations.user_id', 'users.id')
}
