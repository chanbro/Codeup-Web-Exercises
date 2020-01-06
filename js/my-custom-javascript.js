"use strict";

//function passed to the .ready jQuery method; document object passed through jQuery (doesn't interact with DOM until page is loaded)
$(document).ready(function() {

    // alert("complete");
    // console.log($);

    // $('#important').css("background-color", "cyan");
    //
    // $('li').addClass("purple");
    //
    // $('.purple').css('color','purple');
    //
    // $("#button").click(function () {
    //     alert("You clicked the button")
    // })
    //
    // $('a').addClass('side-nav');
    //
    // $('.side-nav').click(function () {
    //     alert("Scrolling")
    // });
    //
    // $(document).ready(function () {
    //     alert($('#button').html())
    // });
    //
    // $('ol.projects > li').addClass('codeup');
    // $('ol').children('li').eq(2).removeClass('codeup');
    // $('.codeup').css('border', '1px solid red');
    // $('ol').children('li').eq(2).attr('id','codeup');
    //
    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color', 'pink');
    // alert($('h1').html());
    // var contents = $('h1').html();
    // alert(contents);

    $('h1').click(function(){
        $(this).css('background-color','green')
    })

    $('p').dblclick(function () {
        $(this).css('font-size', '18px')
    })

    // $('li').hover(
    //     function () {
    //         $('li').css('color', 'red')
    //     },
    //     function () {
    //         $('li').css('color', 'black')
    //     }
    // )

    $('li')
        .mouseenter(function () {
            $('li').css('color','red')
        })
        .mouseout(function () {
            $('li').css('color','black')
        })
});