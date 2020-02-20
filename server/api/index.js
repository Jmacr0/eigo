const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../database/models/index');

router.get('/test', (req, res) => {
	res.json({
		"hello": "world"
	});
})

router.get('/user/:id', (req, res) => {
	const { id } = req.params;
	db.User.findById(id)
		.exec()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(error => {
			res.status(500).json(error);
		});
})

router.post('/user/new', (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new db.User({
		_id: new mongoose.Types.ObjectId(),
		username,
		email,
		password
	});
	newUser
		.save()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json(err);
		})

});

router.post('/user/login', (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);
	db.User
		.findOne({ username, password })
		.exec()
		.then(user => {
			console.log("Successfully Found");
			console.log(user);
			res.status(200).json(user);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json(error);
		})
})

module.exports = router;


