const express = require('express');
const router = express.Router();

const createController = require('../create.model');

router.post('/create', createController.create);

router.get('/show', createController.list);
router.get('/show/:id', createController.show);

router.put('/update/:id', createController.update);
router.delete('/delete/:id', createController.destroy);

module.exports = router;