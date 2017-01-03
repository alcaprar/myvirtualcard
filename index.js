var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

//config file
var config = require('./config');

//mongodb connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.uri, function (err) {
    if (err){
        console.log('Error while connecting to mongodb.', err)
    }
});

app.engine('html', swig.renderFile);
global.rootPath = __dirname;
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/data', express.static(__dirname + '/data'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('./routes'));

app.listen(port, function () {
    console.log('Server listening on port ' + port );
});