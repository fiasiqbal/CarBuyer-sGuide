const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CarsDb');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    name: String,
    // price: Number,
    // mileage: Number,
    // fuel: String,
    // engine: Number,
    // transmission: String,
    image: String
})

var Cardata = mongoose.model('cardata',CarSchema);

module.exports = Cardata;