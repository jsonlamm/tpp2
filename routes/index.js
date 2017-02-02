var Promise = require('bluebird');
var express = require('express')
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

router.get('/', function(req, res, next) {

    res.render('index')

});


router.get('/api/hotels', (req, res, next) => {
  Hotel.findAll()
  .then((hotels) => {
    res.json(hotels)
  })
})

module.exports = router;
