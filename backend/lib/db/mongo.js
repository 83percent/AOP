const mongoose = require('mongoose');

// local
//const __url = 'mongodb://127.0.0.1:27017/aop?poolSize=20&writeConcern=majority';
// Atlas
const __url = 'mongodb+srv://aop_admin:wjsgudtjdWkd@@@cluster0.dqlbz.mongodb.net/aop?retryWrites=true&w=majority';

mongoose.connect(
    __url, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
); // Connect Mongoose

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongoose - MongoDB Connection Access Success.");
});

module.exports = mongoose;