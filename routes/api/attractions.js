var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');



router.get('/hotels', (req, res, next) => {
// res.send('hello')
  Hotel.findAll()
  .then((hotels) => {
    res.json(hotels)
  })
})

module.exports = router