const router = require('express').Router();
const controller = require('../../../controller');

router.route('/create')
    .get(controller.user.createUser);

module.exports = router;
