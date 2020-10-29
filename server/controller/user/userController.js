const fs = require('fs');
const path = require('path');
const db = require('../../models');
const passport = require('passport');

module.exports = {
	current: (req, res, next) => {
		if (req.user) {
			res.send({
				success: true,
				message: 'User logged in.',
			});
		} else {
			res.send({
				success: false,
				message: 'No user logged in.',
			});
		}
	},
	findUser: async (req, res, next) => {
		console.log(req.user.id);
		const user = await db.User.findOne({
			where: {
				username: req.user.username,
			},
			include: [
				{
					model: db.Favourite,
					include: ['Verbs', 'Adjectives'],
				},
			],
		});
		res.send({
			success: true,
			data: user,
		});
	},
	createUser: (req, res, next) => {
		console.log(req.body);
		passport.authenticate('register', (error, user, message) => {
			if (error) {
				next(error);
				return;
			}
			console.log('user', user)

			if (!user) {
				res.send({
					success: false,
					message,
				});
				return;
			}

			req.logIn(user, (error) => {
				if (error) {
					next(error);
					return;
				};

				const {
					id,
					username,
				} = user;

				res.send({
					success: true,
					data: {
						user: {
							id,
							username,
						},
					},
				});
			});
		})(req, res, next);
	},
	login: (req, res, next) => {
		passport.authenticate('login', (error, user, message) => {
			if (error) {
				next(error);
				return;
			}
			if (!user) {
				res.send({
					success: false,
					message,
				});
				return;
			}

			req.logIn(user, (error) => {
				if (error) {
					next(error);
					return;
				}

				const {
					id,
					username,
				} = user;

				res.send({
					success: true,
					data: {
						user: {
							id,
							username,
						},
					},
				});
			});
		})(req, res, next);
	},
	logout: (req, res, next) => {
		console.log('backend logout')
		req.logout();
		res.send({
			success: true,
		});
	},
	test: (req, res, next) => {
		console.log(req.user);
		res.send(req.user);
	},
}
