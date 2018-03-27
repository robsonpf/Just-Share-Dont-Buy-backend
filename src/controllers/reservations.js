const model = require('../models/reservations')


getById = (req, res, next) => {
  const id = req.params.id

  const reservation = model.getById(id, (result, error) => {
    if (error) {
      console.log("Error getById");
      res.status(404).send("Id not found");
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

getAll = (req, res, next) => {
  const reservation = model.getAll((result, error) => {
    if (error) {
      console.log("Error getAll");
      res.status(404).send("No Data Available for this Resource");
    }

    res.status(200).json(result)
  })
}

createReservation = (req, res, next) => {
  var reservation = req.body;

  console.log("Incoming Reservation Object: " + JSON.stringify(reservation));

  model.createReservation(reservation, (result, error) => {
    if (error) {
      console.log("Error getAll");
      res.status(404).send("Error Creating new Reservation");
    }

    res.status(200).json(result)
  })
}


module.exports = { getById, getAll, createReservation}
