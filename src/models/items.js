const item = require('../../query/items')

getAll = (fn) => {
  return item.getAllItems()
  .then((res, err) => {
    if(err)
    return fn(null, err)
    return fn(res, null)
  })
}

getById = (id, fn) => {
  return item.getItemById(id)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

createItem = (item, fn) => {
  console.log('we in model');
  console.log('this is the item ===', item);
  return item.createItem(item)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

getByCategory = (categoryId, fn) => {
  return item.getByCategory(categoryId)
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
  getByCategory
}
