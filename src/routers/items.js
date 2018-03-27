const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/items')

router.get('/', ctrl.getAll)

router.post('/', ctrl.createItem);

module.exports = router;
