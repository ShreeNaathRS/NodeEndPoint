const express = require('express');
const router = express.Router();

const createController = require('../create.model');

router.post('/create', createController.create);

module.exports = router;