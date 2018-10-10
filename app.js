// author : Wookjin Ha
// github : github.com/Hawookjin/

// LOAD express
var express = require('express');
var app = express();
app.use(express.static('public'));

// LOAD bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 3001;
var server = app.listen(port, function() {
    console.log("Express Server has started on port " + port);
});

var routes = require('./routes/index')(app);
var crawler = require('./routes/crawler')(app);