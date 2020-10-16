const userController = require('./user/userController');
const verbController = require('./verb/verbController');
const favouriteController = require('./favourite/favouriteController');

module.exports = {
	user: userController,
	verb: verbController,
	favourite: favouriteController,
};
