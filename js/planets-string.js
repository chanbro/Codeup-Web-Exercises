(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named

     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");
    // console.log(planetsArray); //

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * Will display with break if JS commands are included in HTML to display the output properly to the user
     * */

    // var planetsArray = planetsArray.join("<br>");
    // console.log(planetsArray);

    /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
    */


    var planetsUnshift = planetsArray.unshift("<ul>", "<li>");
    // console.log(planetsUnshift);

    var planetsPush = planetsArray.push("</li>", "</ul>");
    console.log(planetsArray);


    function planetsSplice() {
        console.log(planetsArray.splice(i, 0, "</li><li>"));
    }

    function planetsHTML() {
        for (var i = 2; i < planetsArray.length; i++) {
            planetsSplice()
        }
    }
    planetsHTML()

})();

