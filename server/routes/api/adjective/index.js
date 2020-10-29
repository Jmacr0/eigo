const router = require('express').Router();
const controller = require('../../../controller');

router.route('/')
	.get(controller.adjective.findAll);

module.exports = router;
