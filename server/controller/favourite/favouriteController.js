const fs = require('fs');
const path = require('path');
const db = require('../../models');
const passport = require('passport');

module.exports = {
	createFavourite: async ({ body: { name }, user: { id } }, res, next) => {
		console.log(name, id);
		// const name = req.body.name;
		const favourite = await db.Favourite.create({
			name,
			UserId: id,
		});
		if (favourite) {
			res.send({
				success: true,
				data: favourite,
			});
		} else {
			res.send({
				success: false,
				message: 'Unable to create favourite.',
			});
		};
	},
	findFavouriteVerb: async (req, res) => {
		console.log(req.body.favouriteId, req.body.verbId);
		const favouritedVerb = await db.Verb.findOne({
			where: {
				id: req.body.verbId,
			},
			include: [{
				model: db.Favourite,
				through: {
					where: {
						favouriteId: req.body.favouriteId,
					},
				},
			}],
		});

		console.log(favouritedVerb);
		console.log('YOO', favouritedVerb.dataValues.Favourites);
		if (favouritedVerb) {
			res.send({
				success: true,
				data: favouritedVerb,
			});
		} else {
			res.send({
				success: false,
				message: 'Unable to find favourited verbs.',
			});
		};
	},
}