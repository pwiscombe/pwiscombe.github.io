// removed http so would work on https sites
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//byui-cit230.github.io/weather/data/towndata.json', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    // document.getElementById('city').innerHTML = weatherInfo.name;
    // document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
}
