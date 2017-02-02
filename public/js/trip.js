'use strict';


/* global $ dayModule */

/**
 * A module for managing multiple days & application state.
 * Days are held in a `days` array, with a reference to the `currentDay`.
 * Clicking the "add" (+) button builds a new day object (see `day.js`)
 * and switches to displaying it. Clicking the "remove" button (x) performs
 * the relatively involved logic of reassigning all day numbers and splicing
 * the day out of the collection.
 *
 * This module has four public methods: `.load()`, which currently just
 * adds a single day (assuming a priori no days); `switchTo`, which manages
 * hiding and showing the proper days; and `addToCurrent`/`removeFromCurrent`,
 * which take `attraction` objects and pass them to `currentDay`.
 */

var tripModule = (function () {

  // application state

  var days = [],
      currentDay;

  // jQuery selections

  var $addButton, $removeButton;
  $(function () {
    $addButton = $('#day-add');
    $removeButton = $('#day-title > button.remove');
  });

  // method used both internally and externally

  function switchTo (newCurrentDay) {
    if (currentDay) currentDay.hide();
    currentDay = newCurrentDay;
    currentDay.show();
  }

  // jQuery event binding

  $(function () {
  

    $addButton.on('click', function () {
      var newDayNum = $('.day-btn').length
      $.post({
        url: '/api/days/',
        data: { number: newDayNum }
      })
        .then(data => {
          $('.day-btn').removeClass('current-day')
          $('<button class="btn btn-circle day-btn current-day"></button>')
            .text(newDayNum)
            .appendTo($('.day-buttons'))
            

          $('#day-title > span').text(`Day ${newDayNum}`);
          // console.log('dayTitle',dayTitle)

      })  

    });


$('#hotelAdd').click(function(){
    var hotelId = $(this).prev().val()
   var currentDay = +($('#day-title > span').text().slice(3))
   var dayId;
   $.get('/api/days')
   .then(function (days) {
      days.forEach(day=>{
        if(day.number===currentDay){
          dayId = day.id
        }
      })
    $.post({
        url: `/api/days/${dayId}/hotels`,
        data: { hotelId: hotelId }
      })
    })
})














  // Day.prototype.buildButton = function () {
  //   // this.$button = $('<button class="btn btn-circle day-btn"></button>')
  //     // .text(this.number);
  //   var self = this;
  //   this.$button.on('click', function (){
  //     this.blur(); // removes focus box from buttons
  //     tripModule.switchTo(self);
  //   });
  //   return this;
  // };




    $removeButton.on('click', deleteCurrentDay);
  });

  function addDay () {
    if (this && this.blur) this.blur(); // removes focus box from buttons
    var newDay = dayModule.create({ number: days.length + 1 }); // dayModule
    days.push(newDay);
    if (days.length === 1) {
      currentDay = newDay;
    }
    switchTo(newDay);
  }

  function deleteCurrentDay () {
    // prevent deleting last day
    if (days.length < 2 || !currentDay) return;
    // remove from the collection
    var index = days.indexOf(currentDay),
      previousDay = days.splice(index, 1)[0],
      newCurrent = days[index] || days[index - 1];
    // fix the remaining day numbers
    days.forEach(function (day, i) {
      day.setNumber(i + 1);
    });
    switchTo(newCurrent);
    previousDay.hideButton();
  }

  // globally accessible module methods

  var publicAPI = {



    load: function () {
      $.get('/api/days')
      .then(function (days) {
      days.forEach(day=> $(addDay))
     })
      .catch( console.error.bind(console) );






      // $(addDay);
    },

    switchTo: switchTo,

    addToCurrent: function (attraction) {
      currentDay.addAttraction(attraction);
    },

    removeFromCurrent: function (attraction) {
      currentDay.removeAttraction(attraction);
    }

  };

  return publicAPI;

}());
