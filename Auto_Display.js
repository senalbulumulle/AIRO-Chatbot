/* Auto Display.js*/
function autoDisplay() {

    var currentClock = new Date().getHours();



    if (7 <= currentClock&&currentClock < 19) {
     document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
    }


    else {
     document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }


}

autoDisplay();
