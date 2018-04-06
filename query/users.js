const knex = require('./db')

getAllUsers = () => {
  return knex('users')
}

getById = (id) => {
  return knex('users')
  .where('id', id)
}

createUser = (user) => {
  return knex('users')
  .insert(user)
}

getByEmailAndHashedPassword = (email, hashed_password) => {
  return knex('users')
  .where({'email': email, "password": hashed_password})
}

module.exports = {
  getAllUsers,
  getById,
  createUser,
  getByEmailAndHashedPassword
}
