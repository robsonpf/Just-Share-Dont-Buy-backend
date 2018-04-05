var sQuery = require("../../query/signUp.js")

login = (user, fn) => {
  console.log("In ModeL: " + user)
  return sQuery.login(user, fn)
  .then((res, err) => {
    if(err)
      fn(null, err)
    fn(res, null)
  })
}

module.exports = {
  login
}
