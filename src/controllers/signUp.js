const model = require("../models/signUp")


const signUp = (req, res, next) => {
  console.log('do i even get here in controller???');
  let user = req.body;
  console.log('this is the user on signup === ', user);
  console.log("body: " + JSON.stringify(user))

  model.createAccount(user, (result, error) => {
    console.log('what am i result === ', result);
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
      res.status(201).json(result)
  })
}

module.exports = {
  signUp
}
