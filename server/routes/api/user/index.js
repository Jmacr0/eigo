const router = require('express').Router();
const controller = require('../../../controller');

router.route('/create')
    .post(controller.user.createUser);

router.route('/authenticate')
    .post(controller.user.login);

module.exports = router;
