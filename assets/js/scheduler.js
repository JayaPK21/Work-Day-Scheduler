// Element to display today's date.
var currentDayEl = $('#currentDay');

// The variable contains the total list of time blocks displayed on the screen.
var timeBlocks = $('.time-block');

// Contains today's date and time object.
var today = moment();

// Gets the current hour of the day from the date and time object.
var currentHour = Number(today.format('H'));

// var startTime = moment('09:00', 'HH:mm');
// console.log("time: "+startTime.format('H A'));
// console.log("time add: "+startTime.add(1, 'hour').format('H A'));

// Formats the current date to be displayed on the screen.
currentDayEl.text(today.format('dddd, MMMM Do YYYY'));

// This following loop is used for working with each time-block of the scheduler application.
$.each(timeBlocks, function (i, val) {
    
    // As the workday starts at 9 am, adding 9 to the index to compare with the current hour.
    var blockHour = i + 9;

    // The corresponding event text for the hour is retrieved from the local storage to be displayed on the screen.
    var eventText = localStorage.getItem('hour'+blockHour);
    $(val).children('textarea').val(eventText);

    // Checks if each time block is in the past, present or future hour of the day.
    if(blockHour < currentHour){

        // The appropriate class is added to set the correct background for the corresponding time block.
        $(val).children('textarea').addClass('past');

    } else if(blockHour == currentHour) {

        $(val).children('textarea').addClass('present');

    } else {
        
        $(val).children('textarea').addClass('future');
    }

    // The data attribute is set for each time-block corresponding to its hour of day.
    $(val).attr('data-hour', blockHour);

    // An event listener is set on save button corresponding to each work time hour of the day.
    $(val).on('click', '.saveBtn', function() {

        // Gets the text value of the task for the corresponding hour of the day.
        var task = $(this).siblings('textarea').val();

        // Gets the corresponding hour of day from the data attribute.
        var hourOfDay = $(val).attr('data-hour');

        // Sets the task that was modified to the corresponding hour of the day to local storage.
        localStorage.setItem('hour'+hourOfDay, task);
    });
});
