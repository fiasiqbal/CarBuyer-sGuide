const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CarsDb');
mongoose.connect('mongodb+srv://user_fias:30031995@mycluster.qm3db.azure.mongodb.net/CarsDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

var Accountdata = mongoose.model('accountdata',AccountSchema);

module.exports = Accountdata;