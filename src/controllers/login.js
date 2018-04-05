const model = require("../models/login")
var token = require('../../query/token.js');

const login = (req, res, next) => {
  let user = req.body;
  console.log("body: " + JSON.stringify(user))

  model.login(user, (result, error) => {
    console.log("Login: " + JSON.stringify(result))
      if(error) {
        res.status(400).send("Error Login user")
        return;
      } else {
        token.generateJWT(user, function(tk, err) {
          if(err) {
            res.status(400).send("Error Login user")
            return;
          } else {
            res.status(200).json({"access_token": tk})
            return;
          }
        });
      }
  })
}

module.exports = {
  login
}
