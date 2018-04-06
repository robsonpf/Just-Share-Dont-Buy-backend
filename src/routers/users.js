const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')
const authorization = require("../middleware/authorization")

router.post("/", ctrl.createUser)
// Only protect these routes
router.get('/', [authorization.protected], ctrl.getAll)
router.get('/:id', [authorization.protected], ctrl.getById)

module.exports = router
