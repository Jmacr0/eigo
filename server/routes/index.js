const express = require('express');

const router = express.Router();

const api = require('./api');

router.use('/api', api);

// router.get('/', (_req, res, _next) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
// })

module.exports = router;