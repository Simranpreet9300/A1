//link to the express package
var express = require('express');
//instanciates a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jewels House' });
});

//express this file as public
module.exports = router;
