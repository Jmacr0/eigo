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
	findFavouriteVerb: async (req, res, next) => {
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
	findFavouriteAdjective: async (req, res, next) => {
		console.log(req.body.favouriteId, req.body.adjectiveId);
		const favouritedAdjective = await db.Adjective.findOne({
			where: {
				id: req.body.adjectiveId,
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
		if (favouritedAdjective) {
			res.send({
				success: true,
				data: favouritedAdjective,
			});
		} else {
			res.send({
				success: false,
				message: 'Unable to find favourited verbs.',
			});
		};
	},
	updateFavouriteVerb: async (req, res, next) => {
		console.log(req.body)
		console.log(req.body.favouriteId, req.body.verbId, req.body.isFavourited);
		try {
			const selectedVerb = await db.Verb.findOne({
				where: {
					id: req.body.verbId,
				},
			});
			const updatedFavourite = await db.Favourite.findOne({
				where: {
					id: req.body.favouriteId,
				},
				include: ['Verbs', 'Adjectives'],
			});
			console.log(updatedFavourite)
			if (req.body.isFavourited) {
				await updatedFavourite.removeVerb(selectedVerb);
			} else {
				await updatedFavourite.addVerb(selectedVerb);
			};
			res.send({
				success: true,
				data: updatedFavourite,
			});
		} catch (error) {
			res.send({
				success: false,
				message: error,
			});
		}
	},
	updateFavouriteAdjective: async (req, res, next) => {
		console.log(req.body.favouriteId, req.body.adjectiveId, req.body.isFavourited);
		try {
			const selectedVerb = await db.Adjective.findOne({
				where: {
					id: req.body.adjectiveId,
				},
			});
			const updatedFavourite = await db.Favourite.findOne({
				where: {
					id: req.body.favouriteId,
				},
				include: [{
					model: db.Adjective,
				}],
			});
			if (req.body.isFavourited) {
				await updatedFavourite.removeAdjective(selectedVerb);
			} else {
				await updatedFavourite.addAdjective(selectedVerb);
			};
			res.send({
				success: true,
				data: updatedFavourite,
			});
		} catch (error) {
			res.send({
				success: false,
				message: error,
			});
		}
	},
}