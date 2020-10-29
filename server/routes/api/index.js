const express = require('express');
const router = express.Router();

const user = require('./user');
const verb = require('./verb');
const adjective = require('./adjective');
const favourite = require('./favourite');

router.use('/user', user);
router.use('/verb', verb);
router.use('/adjective', adjective);
router.use('/favourite', favourite);

module.exports = router;