var high = 50;
var low = 37;
var speed = 10;

function windchill(temp, wind){
    var chill=Math.round(35.74 + (0.6215 * temp)- (35.75*Math.pow(wind,0.16)) +(0.4275 * temp * Math.pow(wind,0.16)));
    return chill;
}
var highChill = windchill(high,speed);
var lowChill = windchill(low,speed);

document.getElementById("high_feel").innerHTML = "Feels like: "+highChill+ "&deg;F";
document.getElementById("low_feel").innerHTML = "Feels like: "+lowChill+ "&deg;F";
