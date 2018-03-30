const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/items')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.createItem)
router.patch('/:id', ctrl.updateItem)

module.exports = router;
