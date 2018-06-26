// removed http so would work on https sites
var weatherObject = new XMLHttpRequest();
var city = document.getElementById("cityName").innerText;
var locationId;
switch (city) {
    case "Greenville":
        {
            locationId = "4695066";
            break;
        }
    case "Springfield":
        {
            locationId = "4409896"
            break;
        }
        //default to Franklin
    default:
        {
            locationId = "4759986";
        }
}




weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + locationId + '&appid=130fd29c0ecfd2034fcab509cb06f917&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('city').innerHTML = weatherInfo.name;
    var temperature = weatherInfo.main.temp;
    var wind = weatherInfo.wind.speed;
    var humidity = weatherInfo.main.humidity;
    var windchill = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temperature * Math.pow(wind, 0.16)));
    var heatIndexCalc = (-42.379 + (2.049 * temperature) + (10.1433 * humidity) + (-0.2248 * temperature * humidity) + (-0.006837 * temperature * temperature) + (-0.05482 * humidity * humidity) + (0.001229 * temperature * temperature * humidity) + (0.00085282 * temperature * humidity * humidity) + (-0.00000199 * temperature * temperature * humidity * humidity));
    var tempHigh = weatherInfo.main.temp_max;
    var tempLow = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = Math.round(parseFloat(temperature));
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].main;
    var iconcode = weatherInfo.weather["0"].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    if (temperature > 80) {
        document.getElementById('windChill').innerHTML = "Heat Index: " + Math.round(parseFloat(heatIndexCalc));
    } else if (temperature > windchill) {
        document.getElementById('windChill').innerHTML = "Windchill: " + Math.round(parseFloat(windchill));
    } else {
        document.getElementById('windChill').innerHTML = "Feels like: " + Math.round(parseFloat(temperature));
    }

    document.getElementById('windSpeed').innerHTML = Math.round(parseFloat(wind));
    document.getElementById('highTemp').innerHTML = Math.round(parseFloat(tempHigh));
    document.getElementById('lowTemp').innerHTML = Math.round(parseFloat(tempLow));

}
