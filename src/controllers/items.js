 const model = require('../models/items')

getAll = (req, res, next) => {
  const items = model.getAll((result, error) => {

      if(error) {
        res.status(404).send("No Data Available for this Resource")
      }

      if (result.length === 0) {
        res.status(404).json({
        status: 404,
        message: `No Data Available for for this Resource`,
        errors: "Not found"
      })
    }

      res.status(200).json(result)

  })
}


getById = (req, res, next) => {
  const id = req.params.id
  model.getById(id, (result, error) => {
    if (error) {
      res.status(404).send("Id not found");
    }

    if (result.length === 0) {
      res.status(404).json({
        status: 404,
        message: `Category with id ${id} does not exist`,
        errors: "Not found"
      })
    }
    res.status(200).json(result[0])
  })
}


createItem = (req, res, next) => {
  let item = req.body
  model.createItem(item, (result, error) => {

      if(error) {
        res.status(404).send("Error Creating new Item")
      }
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          message: 'Error Creating new Item',
          errors: "Not found"
        })
      }

      res.status(200).json(result)

  })
}


getItemsByCategory = (req, res, next) => {
  const categoryId = req.params.id
  model.getByCategory(categoryId, (result, error) => {
    if (error) {
      res.status(404).send("Items not found")
    } else {
      res.status(200).json(result)
    }
  })
}


updateItem = (req, res, next) => {
  const id = req.params.id
  console.log(id);
  const reserved = req.body
  console.log("controller: " + JSON.stringify(reserved));
  model.updateItem(id, reserved, (result, error) => {
    if (error) {
      res.status(404).send("Items not found")
    } else {
      res.status(204).json(result)
    }
  })
}

module.exports = {
  getAll,
  getById,
  createItem,
  getItemsByCategory,
  updateItem
}
