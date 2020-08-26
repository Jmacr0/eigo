const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../database/models');

passport.use(new LocalStrategy(
	function (username, password, done) {
		db.User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}
			db.User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
		passport.serializeUser(function (user, done) {
			done(null, user.id);
		});

		passport.deserializeUser(function (id, done) {
			db.User.getUserById(id, function (err, user) {
				done(err, user);
			});
		});
	}
));
