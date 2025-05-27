// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


// Initialize the carousel
$(document).ready(function() {
    $('#customCarousel1').carousel({
        interval: 5000,  // Change slide every 5 seconds
        ride: 'carousel',
        pause: 'hover'
    });
});