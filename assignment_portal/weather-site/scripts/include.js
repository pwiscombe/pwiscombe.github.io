function include() {
    var z, i, elmnt, file, xhttp;

    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("includefile");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("includefile");
                    include();
                }
            }
            xhttp.open("GET", "includes/" + file, true); //date works if set to false
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

include();  // initial function call
