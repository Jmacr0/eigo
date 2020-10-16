const router = require('express').Router();
const controller = require('../../../controller');

router.route('/one')
    .post(controller.favourite.createFavourite);

router.route('/verb')
    .post(controller.favourite.findFavouriteVerb)
    .patch(controller.favourite.updateFavouriteVerb);
module.exports = router;
