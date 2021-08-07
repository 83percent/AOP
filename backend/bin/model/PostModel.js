const Mongoose = require('mongoose');
const COLL_NAME = 'post';

const PostSchema = new Mongoose.Schema({
    name : {
		type : String,
		required : true
	},
	content : {
		type : String,
		required: true
	}
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, PostSchema);