const model = require('../models/categories')


getById = (req, res, next) => {
  const id = req.params.id

  model.getById(id, (result, error) => {
    if (error) {
      console.log("Error getById");
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

module.exports = { getById }
