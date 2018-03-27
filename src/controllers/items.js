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

createItem = (req, res, next) => {
  let item = req.body;
  console.log(item);
  model.createItem(item, (result, error) => {

      if(error) {
        res.status(404).send("Error Creating new Item")
      }
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          message: 'Error Creating new Item' ,
          errors: "Not found"
        })
      }

      res.status(200).json(result)

  })
}

module.exports = {getAll, createItem}
