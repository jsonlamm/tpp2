var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');
var dayRouter = require('./days');


router.use('/days', dayRouter);

router.get('/hotels', (req, res, next) => {
  Hotel.findAll()
  .then((hotels) => {
    res.json(hotels)
  })
})

router.get('/restaurants', (req, res, next) => {
  Restaurant.findAll()
  .then((restaurants) => {
    res.json(restaurants)
  })
})

router.get('/activities', (req, res, next) => {
  Activity.findAll()
  .then((activities) => {
    res.json(activities)
  })
})



module.exports = router;