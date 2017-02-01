// const express = require('express')

const router = require('../index');

var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/api/hotels', (req, res, next) => {
res.send('hello')
  // Hotel.findAll()
  // .then((hotels) => {
  //   res.json(hotels)
  // })
})

module.exports = router