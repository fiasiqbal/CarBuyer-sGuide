const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CarsDb');
mongoose.connect('mongodb+srv://user_fias:30031995@mycluster.qm3db.azure.mongodb.net/CarsDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    name: String,
    price: Number,
    // mileage: Number,
    // fuel: String,
    // engine: Number,
    // transmission: String,
    image: String
})

var Cardata = mongoose.model('cardata',CarSchema);

module.exports = Cardata;