const db = require('../../query/db')

getById = (id, fn) => {
  db.select('*')
  .from('reservations')
  .where('id', id)
  .then((res, err) => {
    if (err)
      return fn(null, err)
    //console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
})};

getAll = (fn) => {
  db.select('*')
  .from('reservations')
  .then((res, err) => {
    if (err)
      return fn(null, err)
    //console.log("getAll: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
})};

createReservation = (reservation, fn) => {
  db('reservations')
  .insert(reservation)
  .then((res, err) => {
    if (err)
      return fn(null, err)
    
    return fn(res, null)
})};



deleteById = (id, fn) => {
  console.log("GREETINGS IM THE MODEL CODE FOR DELETING")

  return db('reservations')
  .where('id', id)
  .del()
  .then(deletedRowsCount => {
     return deletedRowsCount;
  }).catch(err => {
    console.log("Error", err)
    return err
  })
}

module.exports = { getById, getAll, createReservation, deleteById }
