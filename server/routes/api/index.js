const express = require('express');
const router = express.Router();

const user = require('./user');
const verb = require('./verb');
const favourite = require('./favourite');

router.use('/user', user);
router.use('/verb', verb);
router.use('/favourite', favourite);

module.exports = router;