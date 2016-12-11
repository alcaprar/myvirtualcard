var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.engine('html', swig.renderFile);
global.rootPath = __dirname;
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('./routes'));

app.listen(port, function () {
    console.log('Server listening on port ' + port );
});