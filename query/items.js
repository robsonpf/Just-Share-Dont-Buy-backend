const knex = require('./db')

getAllItems = () => {
  return knex('items')
}

getItemById = (id) => {
  return knex('items')
  .where('id', id)
}

createItem = (item) => {
  console.log('we in query');
  return knex('items')
  .insert(item)
}


module.exports = {
  getAllItems,
  getItemById,
  createItem
}
