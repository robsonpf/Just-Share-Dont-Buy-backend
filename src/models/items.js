const items = require('../../query/items')

getAll = (fn) => {
  return items.getAllItems()
  .then((res, err) => {
    if(err)
    return fn(null, err)
    return fn(res, null)
  })
}

getById = (id, fn) => {
  return items.getItemById(id)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

createItem = (item, fn) => {
  return items.createItem(item)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

getByCategory = (categoryId, fn) => {
  return items.getByCategory(categoryId)
    .then((res, err) => {
      if (err) {
        return fn(null, err)
      } else {
        return fn(res, null)
      }
    })
}

updateItem = (item, fn) => {
  return items.updateItemStatus(item) 
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    } else {
      return fn(res, null)
    }
  })
}


module.exports = {
  getAll,
  getById,
  createItem,
  getByCategory,
  updateItem
}
