const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/items')
console.log('routers all the wayyyy');
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.createItem);

module.exports = router;
