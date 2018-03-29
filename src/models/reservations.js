const reservations = require('../../query/reservations.js')

getAll = (fn) => {
  reservations.getAllReservations()
  .then((res, err) => {
    if(err)
    return fn(null, err)
    console.log("getAll: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

getById = (id, fn) => {
  reservations.getById(id)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

createReservation = (reservation, fn) => {
  reservations.createNewReservation(reservation)
  .then((res, err) => {
    if(err)
      return fn(null, err)
    console.log("createReservation: InsertResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

deleteById = (id, fn) => {
  console.log("GREETINGS IM THE MODEL CODE FOR DELETING")
  reservations.deleteReservationById(id)
  .then(deletedRowsCount => {
    console.log(deletedRowsCount);
     return deletedRowsCount;
  }).catch(err => {
    console.log("Error", err)
    return err
  })
}


module.exports = {
  getById,
  getAll,
  createReservation,
  deleteById
}
