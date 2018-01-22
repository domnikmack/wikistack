const express = require('express');
const app = express();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

app.use('/wiki', wikiRouter);


module.exports = app;
