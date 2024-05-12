var express = require('express');
var router = express.Router();
var {client} = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello, World!');
});

router.get('/goodbye', function(req, res, next) {
  res.send('Goodbye, World!');
});


module.exports = router;
