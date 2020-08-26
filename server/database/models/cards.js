const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	body: [
		{
			type: String,
			trim: true,
			required: true
		},
		{
			type: String,
			trim: true,
			required: true
		},
		{
			type: String,
			trim: true,
			required: true
		}
	]

	// ,
	// cardCreated: {
	// 	type: Date,
	// 	default: Date.now
	// }
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;