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
	Day.create({number:1})    //change number to currentDay variable
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
	res.send('post hotels on specific day')
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