'user strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

// logging middleware
app.use(morgan('dev'));

//body parsing
app.use(bodyParser.urlencoded({extended: true}));

//static route
app.use(express.static(path.join(__dirname + '/public')));

//template engine
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


// app.get('/', function(res, req) {
//   res.render('index',
// });

app.listen(3000);
