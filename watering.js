var currentDay = '12';
var today = '12';

const weather = ["sun","cloud","partsun","rain","sun",
                "sun","partsun","sun","rain","rain",
                "cloud","sun","cloud","cloud","sun",
                "sun"];

const data = new Map([
    ["Strawberry", 1],
    ["Beets", 2],
    ["Blueberry", 3],
    ["Tomato", 4],
    ["Sunflower", 5]
  ]);
// const myPlants = new Set(["Tomato","Blueberry"]);
const myPlants = new Set([localStorage.getItem("myPlants")]);
for(const x of myPlants){
    if((parseInt(currentDay,10)) % data.get(x)==0){
        $(todo).append("<li class='list-group-item list-group-item-info'>"+x+"</li>");
        console.log("adding "+ x);
    }
}

for(var i = 1; i<=4; i++){
    $("#day"+i).html("1/"+(parseInt(currentDay,10)+i-1));
    const curWeather = weather[(parseInt(currentDay,10)+i-1)];
    if(curWeather =="sun"){
        $("#img"+i).attr("src",'./images/sun.svg')
    }
    if(curWeather =="cloud"){
        $("#img"+i).attr("src",'./images/cloudy.svg')
    }
    if(curWeather =="partsun"){
        $("#img"+i).attr("src",'./images/part_sun.svg')
    }
    if(curWeather =="rain"){
        $("#img"+i).attr("src",'./images/rain.svg')
    }
    $("#list"+i).children().remove();
    
    for(const x of myPlants){

        if((parseInt(currentDay,10)+i-1) % data.get(x)==0){
            $("#list"+i).append("<li class='list-group-item list-group-item-info'>"+x+"</li>");
            console.log("adding "+ x);
        }
    }
}

//sets the current date from the history
function changeDate(date){
    currentDay = date;

    if(currentDay==today){
        $(infoCard).html("Today is 1/" + date );
        $(todo).children().remove();
        for(const x of myPlants){
            if((parseInt(currentDay,10)) % data.get(x)==0){
                $(todo).append("<li class='list-group-item list-group-item-info'>"+x+"</li>");
                console.log("adding "+ x);
            }
        }
    } else{
       $(infoCard).html("Now editing 1/" + date);
       $(todo).children().remove();
       for(const x of myPlants){
           if((parseInt(currentDay,10)) % data.get(x)==0){
               $(todo).append("<li class='list-group-item list-group-item-info'>"+x+"</li>");
               console.log("adding "+ x);
           }
       }
    }  

    for(var i = 1; i<=4; i++){
        $("#day"+i).html("1/"+(parseInt(currentDay,10)+i-1));
        const curWeather = weather[(parseInt(currentDay,10)+i-1)];
        if(curWeather =="sun"){
            $("#img"+i).attr("src",'./images/sun.svg')
        }
        if(curWeather =="cloud"){
            $("#img"+i).attr("src",'./images/cloudy.svg')
        }
        if(curWeather =="partsun"){
            $("#img"+i).attr("src",'./images/part_sun.svg')
        }
        if(curWeather =="rain"){
            $("#img"+i).attr("src",'./images/rain.svg')
        }
        $("#list"+i).children().remove();
        for(const x of myPlants){

            if((parseInt(currentDay,10)+i-1) % data.get(x)==0){
                $("#list"+i).append("<li class='list-group-item list-group-item-info'>"+x+"</li>");
                console.log("adding "+ x);
            }
        }
    }
}

//change the history basd on button clicked
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
