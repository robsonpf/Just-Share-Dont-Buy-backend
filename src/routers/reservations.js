const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/reservations')


router.get('/:id', ctrl.getById)

router.get('/', ctrl.getAll)

router.post('/', ctrl.createReservation)

router.delete('/:id', ctrl.deleteById)

module.exports = router
