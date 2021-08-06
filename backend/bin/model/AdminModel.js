const Mongoose = require('mongoose');
const COLL_NAME = 'admin';
const AdminSchema = new Mongoose.Schema({
    password : {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = Mongoose.model(COLL_NAME, AdminSchema);