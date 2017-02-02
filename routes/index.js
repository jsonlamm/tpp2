var Promise = require('bluebird');
var express = require('express')
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});


// router.get('/api/hotels', (req, res, next) => {
// res.send('hello')
//   // Hotel.findAll()
//   // .then((hotels) => {
//   //   res.json(hotels)
//   // })
// })

module.exports = router;
