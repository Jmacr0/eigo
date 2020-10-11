const fs = require('fs');
const path = require('path');
const db = require('../../models');
const passport = require('passport');

module.exports = {
	findAll: async (req, res, next) => {
		const verbs = await db.Verb.findAll();
		if (verbs) {
			res.send({
				success: true,
				data: verbs,
			});
		} else {
			res.send({
				success: false,
				message: 'Unable to retrieve verbs.',
			});
		};
	},
}