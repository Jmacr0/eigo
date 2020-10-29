const fs = require('fs');
const path = require('path');
const db = require('../../models');
const passport = require('passport');

module.exports = {
	findAll: async (req, res, next) => {
		const adjectives = await db.Adjective.findAll();
		if (adjectives) {
			res.send({
				success: true,
				data: adjectives,
			});
		} else {
			res.send({
				success: false,
				message: 'Unable to retrieve adjectives.',
			});
		};
	},
}