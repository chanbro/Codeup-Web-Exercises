"use strict";

//function passed to the .ready jQuery method; document object passed through jQuery (doesn't interact with DOM until page is loaded)
$(document).ready(function() {

    // alert("complete");
    // console.log($);

    $('#important').css("background-color", "cyan");

    $('li').addClass("purple");

    $('.purple').css('color','purple');

    $("#button").click(function () {
        alert("You clicked the button")
    })

});