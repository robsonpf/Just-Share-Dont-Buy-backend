const model = require('../models/categories')

getAll = (req, res, next) => {
  const categories = model.getAll((result, error) => {
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
      res.status(500).send("Try again");
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


module.exports = {
  getAll,
  getById
}
