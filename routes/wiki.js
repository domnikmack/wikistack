const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  // res.send('This was a post request');
  res.json(req.body);
});

router.get('/add', function(req,res, next) {
  res.render('addpage');
})


module.exports = router;
