const model = require('../models/reservations')

getAll = (req, res, next) => {
  const reservation = model.getAll((result, error) => {
    if(error) {
      res.status(404).send("No Data Available for this Resource")
    }

    if (result.length === 0) {
      res.status(404).json({
        status: 404,
        message: `No Data Available for for this Resource`,
        errors: "Not found"
      })
    }

    res.status(200).json(result)
  })
}


getById = (req, res, next) => {
  const id = req.params.id
  const reservation = model.getById(id, (result, error) => {
      if (error) {
        res.status(404).send("Id not found")
      }

      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          message: `Reservation with id ${id} does not exist`,
          errors: "Not found"
        })
     }

      res.status(200).json(result)
  })
}

createReservation = (req, res, next) => {
  let reservation = req.body;
  // console.log("Incoming Reservation Object: " + JSON.stringify(reservation));
  model.createReservation(reservation, (result, error) => {
    if(error) {
      res.status(404).send("Error Creating new Reservation")
    }
    if (result.length === 0) {
      res.status(404).json({
        status: 404,
        message: `Error Creating new Reservation`,
        errors: "Not found"
      })
    }

    res.status(200).json(result)
  })
}

deleteById = (req, res, next) => {
  const id = req.params.id
  console.log("HELLO I AM DELETE BY ID")

  const deletionPromise = model.deleteById(id)

  deletionPromise.then(deletedRowsCount => {
    res.status(200).json(deletedRowsCount)
  })

  deletionPromise.catch(error => {
    console.log(error)
    res.status(404).json({
      status: 404,
      message: `Error Deleting Reservation`,
      errors: "Not found"
    })
  })
}

module.exports = {
  getById,
  getAll,
  createReservation,
  deleteById
}
