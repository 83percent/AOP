const Mongoose = require('mongoose');
const COLL_NAME = 'qna';

const QnASchema = new Mongoose.Schema({
    title : {
		type : String,
		required : true
	},
	name : {
		type: String,
		required: true
	},
	content : {
		type : String,
		required : true
	},
	answer : {
		type : String
	},
    password : {
        type: String
    },
	reg_date : {
		type : Date,
		default : Date.now()
	}
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, QnASchema);