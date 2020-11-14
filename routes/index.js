/*
 * File name: index.js
 * Author's name: Simranpreet Kaur
 * Website name: http://localhost:3000/
 * Description: This is the file that contains the express routes for all my views
 */

//link to the express package
var express = require('express');
//instanciates a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Jewels House' });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
    res.render('about')
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
    res.render('projects')
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('services')
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact')
});

//express this file as public
module.exports = router;
