var currentDayEl = $('#currentDay');

var timeBlocks = $('.time-block');
var today = moment();
var currentHour = Number(today.format('H'));

currentDayEl.text(today.format('dddd, MMMM Do YYYY'));

//console.log(timeBlocks);

$.each(timeBlocks, function (i, val) {
    
    // As the workday starts at 9 am, adding 9 to the index to compare with the current hour.
    var blockHour = i + 9;

    // Checks if each time block is in the past, present or future hour of the day.
    if(blockHour < currentHour){

        // The appropriate class is added to set the correct background for the corresponding time block.
        $(val).children('textarea').addClass('past');

    } else if(blockHour == currentHour) {

        $(val).children('textarea').addClass('present');

    } else {
        
        $(val).children('textarea').addClass('future');
    }

    $(val).on('click', '.saveBtn', function() {
        var abc = $(this).siblings('textarea').val();

        console.log("Text value: "+abc);
    });
});
