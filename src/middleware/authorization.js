var jwt = require('jsonwebtoken');
const SECRET = "ansud8ra6fsvbdasdihulaigusd91treabsjdna#$%$";
generateToken = (user, fn) => {
  var unsigned = {
    sub: user.email,
    name: user.name,
    phone: user.phone,
    iat:  Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };
  jwt.sign(unsigned, SECRET, function(err, token) {
    if(err) {
      fn(null, err)
    } else {
      fn(token, null)
    }
  });
}

function protected(req, res, next) {
  if(!req.headers['authorization']) {
    res.status(401).send({"error": "Bad Request"})
  } else {
    const token = req.headers['authorization'].replace('Bearer ', '');
    jwt.verify(token, SECRET, function(err, decoded) {
      if(err) {
        res.status(401).send({"error": "Unauthorized"})
      } else {
        next()
      }
    });
  }
}

module.exports = {
  protected,
  generateToken
}
