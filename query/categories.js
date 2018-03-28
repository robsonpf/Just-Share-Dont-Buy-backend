const knex = require('./db')

getAllCategories = () => {
  return knex('categories')
}

getById = (id) => {
  return knex('categories')
  .where('id', id)
}

module.exports = {
  getAllCategories,
  getById
}
