var mymap = L.map('mapid').setView([43.0106, -97.7025], 4);


var roadLayer = L.tileLayer('https://api.mapbox.com/styles/v1/alomalo/ciwzchwzl00292pmq66d7nq81/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxvbWFsbyIsImEiOiJjaXd6MDdsMWQwMjJlMnpwaDJ4NDNndzMwIn0.g9xMsEz3RFaAXRmbAj2iYQ', {
    opacity: '0.5',
    maxZoom: 6,
    zIndex: 3
}).addTo(mymap);

var nameLayer = L.tileLayer('https://api.mapbox.com/styles/v1/alomalo/ciwzahojq002b2qsd3rmqvk69/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxvbWFsbyIsImEiOiJjaXd6MDdsMWQwMjJlMnpwaDJ4NDNndzMwIn0.g9xMsEz3RFaAXRmbAj2iYQ', {
    maxZoom: 6,
    zIndex: 4
}).addTo(mymap);


var bgLayer = L.tileLayer('https://api.mapbox.com/styles/v1/alomalo/ciwzwg4x600092qt7l91l99i4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxvbWFsbyIsImEiOiJjaXd6MDdsMWQwMjJlMnpwaDJ4NDNndzMwIn0.g9xMsEz3RFaAXRmbAj2iYQ', {
    maxZoom: 6,
    zIndex: 1
}).addTo(mymap);


var hillshadeLayer = L.tileLayer('https://api.mapbox.com/styles/v1/alomalo/ciwz180m300252qoe16cv9re2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxvbWFsbyIsImEiOiJjaXd6MDdsMWQwMjJlMnpwaDJ4NDNndzMwIn0.g9xMsEz3RFaAXRmbAj2iYQ', {
    maxZoom: 6,
    zIndex: 2,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);
