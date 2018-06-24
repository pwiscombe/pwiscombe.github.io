// removed http so would work on https sites
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4759986&appid=130fd29c0ecfd2034fcab509cb06f917&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('city').innerHTML = weatherInfo.name;
    var temperature = weatherInfo.main.temp;
    var wind = weatherInfo.wind.speed;
    var windchill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temperature * Math.pow(wind, 0.16)));
    var tempHigh = weatherInfo.main.temp_max;
    var tempLow = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = Math.round(parseFloat(temperature));
    document.getElementById('description').innerHTML = weatherInfo.weather["0" ].main;
    var iconcode = weatherInfo.weather["0" ].icon;
    var icon_path = "http://openweathermap.org/img/w/" +iconcode +".png";
    document.getElementById('weather_icon').src = icon_path;
    document.getElementById('windChill').innerHTML= Math.round(parseFloat(windchill));

    document.getElementById('windSpeed').innerHTML = Math.round(parseFloat(wind));
    document.getElementById('highTemp').innerHTML= Math.round(parseFloat(tempHigh));
    document.getElementById('lowTemp').innerHTML= Math.round(parseFloat(tempLow));

}
/*
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=130fd29c0ecfd2034fcab509cb06f917&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather["0" ].icon;
    var icon_path = "http://openweathermap.org/img/w/" +iconcode +".png";
    document.getElementById('weather_icon').src = icon_path; */

 // end of weather function
