const model = require('../models/users')
const crypto = require('crypto')
const authorization = require('../middleware/authorization')


getAll = (req, res, next) => {
  const users = model.getAll((result, error) => {
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

createUser = (req, res, next) => {
  let user = req.body;
  const hash = crypto.createHash('sha256');
  hash.update(user.password);
  var hashed = hash.digest('hex')
  user.password = hashed;

  model.createUser(user, (result, error) => {
    if(error) {
      res.status(400).send("Error Registering user")
    }

    if (result.length === 0) {
      res.status(404).json({
        status: 404,
        message: 'Error Registering User',
        errors: "Exception"
      })
    }

    authorization.generateToken(user, (token, err) => {
      if(err) {
        res.status(400).send("Failed to generate token")
      } else {
        res.status(201).json({"access_token": token})
      }
    });
  })
}

module.exports = {
  getAll,
  getById,
  createUser
}
