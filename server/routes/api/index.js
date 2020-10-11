const express = require('express');
const router = express.Router();

const user = require('./user');
const verb = require('./verb');

router.use('/user', user);
router.use('/verb', verb);

module.exports = router;