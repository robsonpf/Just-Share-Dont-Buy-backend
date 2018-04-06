const model = require('../models/users')
const crypto = require('crypto')
const authorization = require('../middleware/authorization')

loginUser = (req, res, next) => {
  let user = req.body;
  const hash = crypto.createHash('sha256');
  hash.update(user.password);
  var hashed_password = hash.digest('hex')

  model.getByEmailAndHashedPassword(user.email, hashed_password, (result, error) => {
    if(error) {
      res.status(400).send("Failed to login")
    } else {
      authorization.generateToken(user, (token, err) => {
        if(err) {
          res.status(400).send("Failed to login")
        } else {
          res.status(200).json({"access_token": token})
        }
      });
    }
  })
}

module.exports = {
  loginUser
}
