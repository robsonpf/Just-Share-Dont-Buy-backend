const db = require('../../query/db')

createItem = (item, fn) => {
  db('items')
  .insert(item)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
})};

getAll = (fn) => {
  db.select('*')
  .from('items')
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
})};

module.exports = {getAll, createItem}
