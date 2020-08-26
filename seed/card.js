let mongoose = require("mongoose");
let db = require("../database/models");

mongoose.connect("mongodb://localhost/eigoDB", {
	useNewUrlParser: true,
	useFindAndModify: false
});

let CardSeed = [
	{
		_id: new mongoose.Types.ObjectId,
		body: [
			"こんにちは。"
			,
			"Konnichiwa."
			,
			"Hello / Good afternoon."
		]
	},
];

