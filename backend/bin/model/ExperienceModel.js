const Mongoose = require('mongoose');
const COLL_NAME = 'experience';

const ExperienceSchema = new Mongoose.Schema({
    name : {
		type : String,
		required : true
	},
	tel: {
		type : String,
		required : true,
		unique : true
	},
	purpose : {
		type : String,
		required : true
	},
	requirement : {
		type : String
	},
	check : {
		type : Boolean,
		default: false
	},
	reg_date : {
		type : Date,
		default : Date.now()
	}
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, ExperienceSchema);