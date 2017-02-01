var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');



router.get('/hotels', (req, res, next) => {

  Hotel.findAll()
  .then((hotels) => {
    res.json(hotels)
  })
})

// $.ajax({
//   method: 'VERB',
//   url: '/whatever/route',
//   data: someDataToSend, // e.g. for POST requests
// })
// .then(function (responseData) {
//   // some code to run when the response comes back
// })
// .catch(function (errorObj) {
//   // some code to run if the request errors out
// });

// $.ajax({
//   method: 'GET',
//   url: '/hotels'
// })
// .then(() => {
//   return Hotel.findAll()
//   })
//   .then(hotels => {
//     res.json(hotels)
// })
// .catch(err)

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

module.exports = router