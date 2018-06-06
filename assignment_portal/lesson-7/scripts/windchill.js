var high = 90;
var low = 66;
var avg = (high + low) / 2;
var speed = 5;

function calcChill(temp, wind) {
    var windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));
    return windchill;
}

var chill = calcChill(avg, speed);

document.getElementById("chilltemp").innerHTML = "Chill:<br>"+ chill + "&deg;F";
