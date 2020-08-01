const express = require('express');
const cors = require('cors');
const Branddata = require('./src/model/Branddata');
const Cardata = require('./src/model/Cardata');
const Accountdata = require('./src/model/Accountdata');

var app = express();
app.use(cors());
app.use(express.json());

app.get('/brands',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Branddata.find()
    .then(function(brands){
        res.send(brands);
    });
});

app.post('/brands/insert', function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var brand = {
        name : req.body.brand.name,
        image : req.body.brand.image
    };
    var newbrand = new Branddata(brand);
    newbrand.save();
    res.send('"Node-Express server: Brand details added to database"');
})

app.get('/cars',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Cardata.find()
    .then(function(cars){
        res.send(cars);
    });
});

app.post('/cars/insert', function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var car = {
        brand : req.body.car.brand,
        name : req.body.car.name,
        // price : req.body.car.price,
        // mileage : req.body.car.mileage,
        // fuel : req.body.car.fuel,
        // engine : req.body.car.engine,
        // transmission : req.body.car.transmission,
        image : req.body.car.image
    };
    var newcar = new Cardata(car);
    newcar.save();
    res.send('"Node-Express server: Car details added to database"');
})

app.put('/brands/edit',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var brand = {
        name : req.body.brand.name,
        image : req.body.brand.image
    };
    Branddata.findByIdAndUpdate(req.body.brand._id,{$set:brand},(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.put('/cars/edit',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var car = {
        brand : req.body.car.brand,
        name : req.body.car.name,
        // price : req.body.car.price,
        // mileage : req.body.car.mileage,
        // fuel : req.body.car.fuel,
        // engine : req.body.car.engine,
        // transmission : req.body.car.transmission,
        image : req.body.car.image
    };
    Cardata.findByIdAndUpdate(req.body.car._id,{$set:car},(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.delete('/brands/delete/:id',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.params.id);
    Branddata.findByIdAndDelete(req.params.id,(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.delete('/cars/delete/:id',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.params.id);
    Cardata.findByIdAndDelete(req.params.id,(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.get('/brands/:id',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Branddata.findById(req.params.id)
    .then(function(brand){
        res.send(brand);
    });
})

app.get('/cars/:id',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Cardata.findById(req.params.id)
    .then(function(car){
        res.send(car);
    });
})

app.get('/brandcars/:name',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Cardata.find({brand:req.params.name})
    .then(function(car){
        res.send(car);
    });
})

app.post('/users/login',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var email = req.body.user.email;
    var password = req.body.user.password;
    Accountdata.findOne({email:email},function(err,user){
        if (err) {
            console.log("err ",err);
        } else {
            if (!user) {
                res.status(401).send("Wrong email");
            } else if (user.password!==password) {
                res.status(401).send("Wrong password");
            } else {
                res.status(200).send("Welcome");
            }
        }
    });
});

app.post('/users/insert', function(req,res){
    console.log("Connected");
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log("Register request received");
    var item = {
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password
    };
    var newuser = new Accountdata(item);
    newuser.save();
    console.log("New user saved to database");
    res.send('"Node-Express server: User added to database"');
})

app.listen(3000,function(){
    console.log('Listening to port 3000');
});