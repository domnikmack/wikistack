'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models');
const router = require('./routes');

// logging middleware
app.use(morgan('dev'));

//body parsing
app.use(bodyParser.urlencoded({extended: true}));

//static route
app.use(express.static(path.join(__dirname + '/public')));

app.use(router);

//template engine
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);



// Database Sync
models.db.sync({force: true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);




