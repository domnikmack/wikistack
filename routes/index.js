const express = require('express');
const app = express();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


app.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = app;
