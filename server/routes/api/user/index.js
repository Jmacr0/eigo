const router = require('express').Router();
const controller = require('../../../controller');

router.route('/current')
    .get(controller.user.current);

router.route('/one')
    .get(controller.user.findUser)
    .post(controller.user.createUser);

router.route('/authenticate')
    .post(controller.user.login);

router.route('/test')
    .get(controller.user.test);
module.exports = router;
