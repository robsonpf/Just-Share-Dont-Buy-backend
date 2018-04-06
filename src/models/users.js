const db = require('../../query/users.js')

getAll = (fn) => {
  db.getAllUsers()
  .then((res, err) => {
    if(err)
      return fn(null, err)
    console.log("getAll: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

getById = (id, fn) => {
  db.getById(id)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

createUser = (user, fn) => {
  return db.createUser(user)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    return fn(res, null)
  })
}

getByEmailAndHashedPassword = (email, hashed_password, fn) => {
  db.getByEmailAndHashedPassword(email, hashed_password)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getByEmailAndHashedPassword: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

module.exports = {
  getAll,
  getById,
  createUser,
  getByEmailAndHashedPassword
}
