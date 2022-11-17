var currentDay = '12';
var today = '12';
//sets the current date from the history
function changeDate(date){
    currentDay = date;
    console.log(currentDay);
    $(infoCard).html("Now editing " + date);
}

function setAction(action){
    if(action == 'watered'){
        const b = $('#'+currentDay)
        b.html("1/" +currentDay+" Watered")
        b.removeClass()
        b.addClass("btn btn-info")
    }
    if(action == 'skipped'){
        const b = $('#'+currentDay)
        b.html("1/"+currentDay+" Skipped")
        b.removeClass()
        b.addClass("btn btn-warning")
    }
    if(action == 'rained'){
        const b = $('#'+currentDay)
        b.html("1/"+currentDay+" Rained")
        b.removeClass()
        b.addClass("btn btn-primary")
    }
}
