const express = require('express');
const router = express.Router();
const list = require('../controllers/list.controller');

/* GET programming languages. */
router.get('/', list.get);

module.exports = router;
