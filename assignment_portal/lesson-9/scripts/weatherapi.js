// removed http so would work on https sites
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=2172797&appid=130fd29c0ecfd2034fcab509cb06f917&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

   // document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
}
