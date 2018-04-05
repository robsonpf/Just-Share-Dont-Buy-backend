// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
const SECRET = "ansud8ra6fsvbdasdihulaigusd91treabsjdna#$%$";
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// //backdate a jwt 30 seconds
// var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
//
// // sign with RSA SHA256
// var cert = fs.readFileSync('private.key');  // get private key
// var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

generateJWT = (user, fn) => {
  // console.log("query: " + JSON.stringify(user));
  console.log("generateJWT:user: " + JSON.stringify(user))
  var unsigned = {"sub": user.email, "name": user.name, "phone": user.phone, "iat":  Math.floor(Date.now() / 1000), "exp": Math.floor(Date.now() / 1000) + 3600};
  // sign asynchronously
  jwt.sign(unsigned, SECRET, function(err, token) {
    if(err) {
      fn(null, err)
    } else {
      console.log("generateJWT:token: " + token);
      fn(token, null)
    }

  });
}

validateJWT = (token, fn) => {
  // console.log("query: " + JSON.stringify(user));
  console.log("validateJWT:token: " + token)
  // sign asynchronously
  jwt.verify(token, SECRET, function(err, decoded) {
    if(err) {
      fn(null, err);
    } else {
      fn(decoded, null);
    }
  });
}

module.exports = {
  generateJWT,
  validateJWT
}
