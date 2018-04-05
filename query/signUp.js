const knex = require("./db")
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

signUp = (user, fn) => {
  // console.log("query: " + JSON.stringify(user));
  console.log("query, pass: " + user.password)
  hash.update(user.password);
  var hashed = hash.digest('hex')
  console.log("hashed: "+hashed);
  user.password = hashed;
  // var hash = bcrypt.hashSync(user.password, SALT)
  // user.password = hash;

  knex('users')
  .insert(user)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

login = (user, fn) => {
  // console.log("query: " + JSON.stringify(user));
  console.log("query, pass: " + user.password)
  hash.update(user.password);
  var hashed = hash.digest('hex')
  console.log("hashed: "+hashed);
  user.password = hashed;
  // var hash = bcrypt.hashSync(user.password, SALT)
  // user.password = hash;

  return knex('users')
  .where({'email': user.email, "password": hashed})
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

module.exports = {
  signUp,
  login
}
