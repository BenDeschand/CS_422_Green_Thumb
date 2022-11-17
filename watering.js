var currentDay = '12';
var today = '12';
//sets the current date from the history
function changeDate(date){
    currentDay = date;
    console.log(currentDay);

    if(currentDay==today){
        $(infoCard).html("Today is 1/" + date );
        $(todo).children().remove();
        $(todo).append("<li class='list-group-item list-group-item-info'>Sunflower</li>")
    } else{
       $(infoCard).html("Now editing 1/" + date);
       $(todo).children().remove();
       $(todo).append("<li class='list-group-item list-group-item-info'>Sunflower</li>")
    }  
}

function setAction(action){
    if(action == 'watered'){
        const b = $('#'+currentDay)
        b.html("1/" +currentDay+" Watered")
        b.removeClass()
        b.addClass("btn list-group-item-info border border-info")
    }
    if(action == 'skipped'){
        const b = $('#'+currentDay)
        b.html("1/"+currentDay+" Skipped")
        b.removeClass()
        b.addClass("btn list-group-item-warning border border-warning")
    }
    if(action == 'rained'){
        const b = $('#'+currentDay)
        b.html("1/"+currentDay+" Rained")
        b.removeClass()
        b.addClass("btn list-group-item-primary border border-primary")
    }
}
