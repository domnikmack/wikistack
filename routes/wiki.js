const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  // res.send('This was a post request');
    var page = Page.build({
      title: req.body.name,
      content: req.body.content
    });
  // res.json(req.body);
  page.save()
  .then(() => res.redirect('/'));
});

router.get('/add', function(req,res, next) {
  res.render('addpage');
})


module.exports = router;
