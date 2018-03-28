const knex = require('./db')

getAllUsers = () => {
  return knex('users')
}

getById = (id) => {
  return knex('users')
  .where('id', id)
}

module.exports = {
  getAllUsers,
  getById
}
