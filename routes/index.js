var express = require('express');
var router = express.Router();

var photospheres = require('../photospheres.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    photospheres: photospheres
  });
});

module.exports = router;
