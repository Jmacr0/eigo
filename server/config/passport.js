const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

const authentication = () => {
	passport.use('register', new LocalStrategy(
		async (username, password, done) => {
			const existingUser = await db.User.findOne({
				where: {
					username,
				},
			});
			console.log(existingUser);
			if (existingUser) {
				done(null, false, { message: 'Username already exists.' });
				return;
			};
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = await db.User.create({
				username,
				password: hashedPassword,
			});
			done(null, user);
		}
	));

	passport.use('login', new LocalStrategy(
		async (username, password, done) => {
			const user = await db.User.findOne({
				where: {
					username,
				}
			});
			if (user) {
				console.log(user);
				console.log('password', password, user.password)
				const isMatch = await bcrypt.compare(password, user.password);
				console.log(isMatch);
				if (isMatch) {
					done(null, user);
				} else {
					done(null, false, { message: 'Username or password incorrect.' });
				}
			} else {
				done(null, false, { message: 'Username or password incorrect.' });
			}
		}
	));

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser(async (id, done) => {
		try {
			const user = await db.User.findByPk(id);
			done(null, user);
		} catch (err) {
			done(err, false);
		}
	});
};

module.exports = authentication;