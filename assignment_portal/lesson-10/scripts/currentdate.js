    var d = new Date();
    var daylist = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var weekday = daylist[d.getDay()];
    var day = d.getDate();
    var monthlist = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var monthname = monthlist[d.getMonth()];
    var year = d.getFullYear();
    var fulldate = weekday + ", " + day + " " + monthname + " " + year;
    document.getElementById("datestring").innerHTML = fulldate;

