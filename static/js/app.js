// from data.js
var sightings = data;

// YOUR CODE HERE!

//get reference to table body
var tbody = d3.select("tbody");

//loop through data and console.log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});

//use D3 to append one table row "tr" for each ufo sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
    });
});

//use D3 to append 1 cell per ufo sighting value
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
    });
});

//use D3 to update each cell's text with ufo sighting values
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


//var sightings = data;

var button = d3.select("#filter-btn");
var filters = d3.select("#filters");

button.on("click", runEnter);
filters.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightings);

    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);


};




