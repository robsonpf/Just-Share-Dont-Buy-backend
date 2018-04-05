const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/signUp")

router.post("/", ctrl.signUp)

module.exports = router
