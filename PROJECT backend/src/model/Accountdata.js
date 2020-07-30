const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CarsDb');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

var Accountdata = mongoose.model('accountdata',AccountSchema);

module.exports = Accountdata;