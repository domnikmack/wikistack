const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('This is the wiki route');
});

router.post('/', function(req, res, next) {
  res.send('This was a post request');
});

router.get('/add', function(req,res, next) {
  res.send('Addint');
})


module.exports = router;
