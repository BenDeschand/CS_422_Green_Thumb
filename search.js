/*
* CS 422
* Green Thumb
* search.js
*/

// plant data
const data = new Map([
    ["Strawberry", ["Every Day", "Bugs", "Stawbuculo"]],
    ["Beets", ["Every Two Days", "Rugs", "Beetbuculo"]],
    ["Blueberry", ["Every Three Days", "Mugs", "Bluebuculo"]],
    ["Tomato", ["Every Four Days", "Chugs", "Tombuculo"]],
    ["Sunflower", ["Every Five Days", "Pugs", "Sunbuculo"]]
  ]);

  const addPlants = new Map();   // maps plants to their add button ids
  const remPlants = new Map();   // maps plants to their remove button ids

  const myPlants = new Set(["Tomato", "Sunflower"]);    // set of plants already added to my plants

  localStorage.setItem("myPlants", "Tomato");

  // sets the data up for the search page
  $(document).ready(function() {
    for(const k of data.keys()) {
      addPlants.set(k, String(k) + "AddBtn");
      remPlants.set(k, String(k) + "RemBtn")
    }

    resetSearch();
    resetMyPlants();

    // event listeners for add buttons
    addPlants.forEach(function(value, key) {
        var btn = "#" + String(value);
        $(document).on('click', btn, function(evt) {
        $("#plantList").append(addToPlants(key, data.get(key)[0], data.get(key)[1], data.get(key)[2], remPlants.get(key)));
        $(this).closest("li").remove();
        myPlants.add(String(key));
        resetSearch();
        $("#searchIn").val("");
        });
    });

    // event listeners for remove buttons
    remPlants.forEach(function(value, key) {
        var btn = "#" + String(value);
        $(document).on('click', btn, function(evt) {
        $(this).closest("tr").remove();
        myPlants.delete(String(key));
        resetMyPlants();
        $("#myPlantsSearch").val("");
        });
    });
});

// event listener for search button
$(document).on('click', "#searchBtn", function(evt) {
    searchResults();
});

// event listener for search input form
$(document).on('keyup', "#searchIn", function(evt) {
    searchResults();
});

// event listener for my plants input form
$(document).on('keyup', "#myPlantsSearch", function(evt) {
    searchMyPlants();
});

// searches for plants based on input and adds them to search list
function searchResults() {
    var input = String($("#searchIn").val());
    if(input.length > 0) {
        var found = false;
        $("#searchList").html("");
        const regEx = new RegExp(input, "gi");

        for(const k of data.keys()) {
        if(k.search(regEx) > -1) {
            if(!myPlants.has(String(k))) {
            found = true;
            $("#searchList").append(addToResults(k, addPlants.get(k)));
            }
        }
        }

        if(!found) {
        resetSearch();
        }
    }
    else {
        resetSearch();
    }
}

// searches for plants based on input from myPlants and shows them in myPlants list
function searchMyPlants() {
    var input = String($("#myPlantsSearch").val());
    if(input.length > 0) {
        var found = false;
        $("#plantList").html("");
        const regEx = new RegExp(input, "gi");

        for(const k of myPlants.values()) {
        if(k.search(regEx) > -1) {
            found = true;
            $("#plantList").append(addToPlants(k, data.get(k)[0], data.get(k)[1], data.get(k)[2], remPlants.get(k)));
        }
        }

        if(!found) {
        resetPlants();
        }
    }
    else {
        resetMyPlants();
    }
}

// adds results to my plants list
function addToPlants(plant, water, pest, dis, id) {
    return "<tr class='table-secondary'><td>" + String(plant) + "</td><td>" + String(water) + "</td><td>" + String(pest) + "</td><td>" + String(dis) + "</td><td><button class='btn btn-danger bold' type='button' id='" + String(id) + "'><span class='bi bi-trash'></span></button></td></tr>"
}

// adds results to search list
function addToResults(plant, id) {
    return "<li class='list-group-item list-group-item-dark'><div class='row'><div class='col-8'>" + String(plant) + "</div><div class='col-1'><button class='btn btn-success bold' type='button' id='" + String(id) + "'>+</button></div></div></li>";
}

// resets the search list to show no results
function resetSearch() {
    $("#searchList").html("");
    $("#searchList").append("<li class='list-group-item list-group-item-dark'><div class='row'><div class='col-8'>No Results</div></div></li>");
}

// resets the myPlants list to show all results
function resetMyPlants() {
    $("#plantList").html("");
    for(const val of myPlants.values()) {
        $("#plantList").append(addToPlants(val, data.get(val)[0], data.get(val)[1], data.get(val)[2], remPlants.get(val)));
    }
}