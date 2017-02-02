var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day')


router.get('/', (req, res, next) => {
  Day.findAll()
  .then(days => {
    res.json(days)
  }).catch(next)
})

router.post('/', (req, res, next) => {

	var body = req.body
	body.number = +body.number
	console.log('rrreeeqqqq', req.body)
	Day.create(body)    //change number to currentDay variable
	.then(day=> {
		res.json(day)
	}).catch(next)
})

router.get('/:id', (req, res, next) => {
	res.send('get one day by ID')
})

router.get('/:id/delete', (req, res, next) => {
	res.send('delete one day based on ID')
})


router.get('/:id/hotels', (req, res, next) => {
	res.send('see hotels on specific day')
})

router.get('/:id/restaurants', (req, res, next) => {
	res.send('get restaurants on specific day')
})

router.get('/:id/activities', (req, res, next) => {
	res.send('see activities on specific day')
})

router.post('/:id/hotels', (req, res, next) => {
	Day.findById(req.params.id)
	.then(function(day){
		console.log('#####',req.body.hotelId)
		return day.update({hotelId : req.body.hotelId})
	}).then(function(day){
		res.send(day);
	})

})

router.post('/:id/restaurants', (req, res, next) => {
	res.send('post restaurants on specific day')
})

router.post('/:id/activities', (req, res, next) => {
	res.send('post activities on specific day')
})

router.get('/:id/hotels/delete', (req, res, next) => {
	res.send('delete hotels on specific day')
})

router.get('/:id/restaurants/delete', (req, res, next) => {
	res.send('delete restaurants on specific day')
})

router.get('/:id/activities/delete', (req, res, next) => {
	res.send('delete activities on specific day')
})





















module.exports = router;