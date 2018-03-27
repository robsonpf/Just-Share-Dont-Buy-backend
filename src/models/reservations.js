const db = require('../../query/db')


getById = (id, fn) => {
  // console.log('inside model:', id, 'db:', db, 'find:', db.find)

  console.log("getById: ID = " + id)

  db.select('*')
    .from('reservations')
    .where('id', id)
    .then((res, err) => {
      if (err) {
        return fn(null, err)
      }
      console.log("getById: QueryResult: " + JSON.stringify(res));
      return fn(res, null)
    })
};

getAll = (fn) => {
  // console.log('inside model:', id, 'db:', db, 'find:', db.find)

  console.log("getAll:Init")

  db.select('*')
    .from('reservations')
    .then((res, err) => {
      if (err) {
        return fn(null, err)
      }
      console.log("getAll: QueryResult: " + JSON.stringify(res));
      return fn(res, null)
    })
};

createReservation = (reservation, fn) => {

  console.log("createReservation:Init")

  db('reservations')
    .insert(reservation)
    .then((res, err) => {
      if (err) {
        return fn(null, err)
      }
      console.log("createReservation: InsertResult: " + JSON.stringify(res));
      return fn(res, null)
    })
};


module.exports = { getById, getAll, createReservation}
