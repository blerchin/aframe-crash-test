var express = require('express');
var router = express.Router();

var photospheres = require('../photospheres.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Aframe Crash Test',
    photospheres: photospheres
  });
});

router.get('/fix', function(req, res, next) {
  res.render('fix', {
    title: 'Aframe Crash Fix',
    photospheres: photospheres
  });
});

router.get('/easyfix', function(req, res, next) {
  res.render('easyfix', {
    title: 'Aframe Easy Crash Fix',
    photospheres: photospheres
  });
});

module.exports = router;
