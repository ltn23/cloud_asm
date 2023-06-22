const express = require('express')
const router = express.Router()

const toyController = require('../app/controllers/ToyController')

router.get('/create', toyController.create)
router.post('/store', toyController.store)
router.get('/:id/edit', toyController.edit)
router.put('/:id', toyController.update)
router.delete('/:id', toyController.delete)
router.get('/:slug', toyController.show)

module.exports = router;
