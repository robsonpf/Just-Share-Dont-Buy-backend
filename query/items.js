const knex = require('./db')

getAllItems = () => {
  return knex('items')
}

getItemById = (id) => {
  return knex('items')
  .where('id', id)
}

createItem = (item) => {
  return knex('items')
  .insert(item)
}

getByCategory = (categoryId) => {
  return knex('items')
    .where('category_id', categoryId)
}

updateItemStatus = (id, reserved) => {
  return knex('items')
  .where('id', id)
  .update(reserved)
  .then((count) => {
    console.log(count + " items updates")
  })
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  getByCategory,
  updateItemStatus
}
