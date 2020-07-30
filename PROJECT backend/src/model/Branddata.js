const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CarsDb');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: String,
    image: String
})

var Branddata = mongoose.model('branddata',BrandSchema);

module.exports = Branddata;