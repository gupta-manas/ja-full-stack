var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var _ = require('lodash');
var methodOverride = require('method-override');

var app = express();
//app.listen(3001);
//Adding a middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/hello', function(req, res, next) {
    res.send('Hello, World!');
    next();
});

var routes = require('./routes/myBeanRoutes');
routes(app);

//Configuring mongoDB connection
mongoose.connect('mongodb://localhost/js-full-stack');
mongoose.connection.once('open', function() {
    console.log('Listening on the port 3001...');
    app.listen(3001);
});