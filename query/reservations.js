const knex = require('./db')

getAllReservations = () => {
  return knex('reservations')
}

getById = (id) => {
  return knex('reservations')
  .where('id', id)
}

createNewReservation = () => {
  return knex('reservations')
  .insert(item)
}

deleteReservationById = (id) => {
  return knex('reservations')
  .where('id', id)
  .del()
}

getAllReservationsWithUsers = () => {
  return knex('reservations')
  .join('users', 'reservations.user_id', 'users.id')
}

module.exports = {
  getAllReservations,
  getById,
  createNewReservation,
  deleteReservationById,
  getAllReservationsWithUsers,
}
