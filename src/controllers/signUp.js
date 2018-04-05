const model = require("../models/signUp")


const signUp = (req, res, next) => {
  let user = req.body;
  console.log("body: " + JSON.stringify(user))

  model.createAccount(user, (result, error) => {
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
      res.status(200).json(result)
  })
}

module.exports = {
  signUp
}
