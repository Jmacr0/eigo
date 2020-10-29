const userController = require('./user/userController');
const verbController = require('./verb/verbController');
const adjectiveController = require('./adjective/adjectiveController');
const favouriteController = require('./favourite/favouriteController');

module.exports = {
	user: userController,
	verb: verbController,
	adjective: adjectiveController,
	favourite: favouriteController,
};
