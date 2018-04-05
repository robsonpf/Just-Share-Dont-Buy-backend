var sQuery = require("../../query/signUp.js")

createAccount = (user, fn) => {
  console.log("In ModeL: " + user)
  return sQuery.signUp(user, fn)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

module.exports = {
  createAccount
}
