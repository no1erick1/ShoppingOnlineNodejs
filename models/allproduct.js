var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var allproductschema = new Schema({
	category:{
		type:String,
		require: true
	},
	imagePath: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	model: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	spec1: {
		type: String,
		required: false
	},
	spec2: {
		type: String,
		required: false
	},
	spec3: {
		type: String,
		required: false
	},
	spec4: {
		type: String,
		required: false
	},
	spec5: {
		type: String,
		required: false
	},
	spec6: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Allproduct', allproductschema);
