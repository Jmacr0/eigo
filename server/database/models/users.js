const mongoose = require('mongoose');
const bcrpyt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: {
		type: String,
		unique: true,
		trim: true,
		required: "Username is Required"
	},
	email: {
		type: String,
		unique: true,
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
	},
	password: {
		type: String,
		trim: true,
		required: "Password is Required",
		validate: [({ length }) => length >= 6, "Password should be longer."]
	},
	userCreated: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("User", UserSchema);

// all the callbacks are passed through from passport LocalStrategy
function createUser(newUser, callback) {
	bcrpyt.genSalt(10, (err, salt) => {
		bcrpyt.hash(newUser.password, salt, (err, hash) => {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

function getUserByUsername(username, callback) {
	var query = { username };
	console.log(username);
	User.findOne(query, callback);
}

function getUserById(id, callback) {
	User.findById(id, callback);
}

function comparePassword(candidatePassword, hash, callback) {
	bcrpyt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
}

module.exports = User;
module.exports.createUser = createUser;
module.exports.getUserByUsername = getUserByUsername;
module.exports.getUserById = getUserById;
module.exports.comparePassword = comparePassword;