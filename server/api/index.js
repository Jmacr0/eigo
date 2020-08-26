const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../database/models/index');
const passport = require('passport');

router.get('/', ({ user }, res) => {
	console.log(user);
	const authenticated = user ? true : false;
	const id = user ? user._id : '';
	res.json({
		authenticated: authenticated,
		id: id
	})

})

// router.get('/user/:id', (req, res) => {
// 	const { id } = req.params;
// 	db.User.findById(id)
// 		.exec()
// 		.then(user => {
// 			res.status(200).json(user);
// 		})
// 		.catch(error => {
// 			res.status(500).json(error);
// 		});
// })

router.post('/user/new', (req, res) => {
	const { username, email, password, passwordConfirm } = req.body;
	if (password === passwordConfirm) {
		const newUser = new db.User({
			_id: new mongoose.Types.ObjectId(),
			username,
			email,
			password
		});
		db.User.createUser(newUser, function (err, user) {
			if (err) throw err;
			res.send(user).end()
		});
	} else {
		res.status(500).send("{errors: \"Passwords don't match\"}").end()
	}
});

router.post('/user/login', passport.authenticate('local'), ({ user: { id } }, res) => {
	console.log(id);
	if (id) {
		console.log('user here!');
		// send back the id
		res.json({
			authenticated: true,
			id: id
		});
	} else {
		console.log('not user :(')
	}
})

router.get('/user/logout', (req, res) => {
	req.session.destroy(() => {
		res.clearCookie('connect.sid');
		res.redirect('/');
	});
})

module.exports = router;


