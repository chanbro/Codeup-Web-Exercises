"use strict";

// console.log('Hello from JavaScript!');
//
// alert("Welcome to my Website!");
//
// var userInput = prompt('What is your favorite color?');
// console.log('The user entered: ' + userInput);
//
// function favoriteColor(userInput) {
//     if (userInput === "blue")
//         return "Great, " + userInput + " is my favorite color too!";
//     else
//         return "I like " + userInput + " too.";
// }
//
// alert(favoriteColor(userInput));

// Exercise 3 from previous lesson

/* Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

 */

//Trying to make rental rate variable, final answer now displaying as string and needs to be fixed
// var rentalRate = prompt("What is the daily rental rate? Please enter the number value only (no $).");
// var rentalRate = parseFloat(rentalRate);
//
// function numCheck0(rentalRate) {
//     if (rentalRate === null) {
//         return rentalRate.stop(true, false);
//     } else if (isNaN(rentalRate) || rentalRate === '') {
//         return ("Please enter the rental price per day.");
//     } else {
//         return ("Your daily rental rate is $" + rentalRate);
//     }
// }
//
// console.log("Daily rental rate: " + rentalRate);
// console.log(typeof rentalRate);
// alert(numCheck0());

// var movie1 = prompt('How many days would you like to rent "The Little Mermaid?"');
//
// function numCheck1(movie1) {
//     if (movie1 === null) {
//         return movie1.stop(true, false);
//     } else if (isNaN(movie1) || movie1 === '') {
//         return ("Please enter the number of days you will be renting the selected movie");
//     } else
//         return "Added to cart";
// }
//
// alert(numCheck1(movie1));
// console.log(movie1);
// console.log("The user entered " + movie1);
// var movie1 = parseInt(movie1);
// console.log(typeof(movie1));
//
//
// var movie2 = prompt('How many days would you like to rent "Brother Bear?"');
//
// function numCheck2(movie2) {
//     if (movie2 === null) {
//         return movie2.stop(true, false);
//     } else if (isNaN(movie2) || movie2 === '') {
//         return ("Please enter the number of days you will be renting the selected movie");
//     } else
//         return "Added to cart";
// }
//
// alert(numCheck2(movie2));
// console.log("The user entered " + movie2);
// var movie2 = parseInt(movie2);
// console.log(typeof(movie2));
//
// var movie3 = prompt('How many days would you like to rent "Hercules"');
//
// function numCheck3(movie3) {
//     if (movie3 === null) {
//         return movie3.stop(true, false);
//     } else if (isNaN(movie3) || movie3 === '') {
//         return ("Please enter the number of days you will be renting the selected movie");
//     } else
//         return "Added to cart";
// }
//
// alert(numCheck3(movie3));
// console.log("The user entered " + movie3);
// var movie3 = parseInt(movie3);
// console.log(typeof(movie3));
//
//
// function rentalTotal() {
//     if (!isNaN(movie1 + movie2 + movie3)) {
//         return "Your total is $" + parseFloat(((rentalRate * (movie1 + movie2 + movie3))).toFixed(2));
//     } else {
//         return "Error, please make sure each rental time is entered as a number.";
//     }
// }
//
// // alert(rentalTotal());
// console.log(rentalTotal());
// var rentalTotalInt = rentalTotal();
// console.log(typeof rentalTotalInt);
// console.log("Parsing total...");
// var rentalTotalInt;
// rentalTotalInt = parseFloat(rentalTotalInt.replace("Your total is $", "")).toFixed(2);
// console.log(rentalTotalInt);
// console.log(typeof rentalTotalInt);
// alert(rentalTotal());

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var google = prompt('How many hours did you work at Google this week?');
//
// function numCheck1(google) {
//     if (google === null) {
//         return google.stop(true, false);
//     } else if (isNaN(google) || google === '') {
//         return "Please enter the number of hours you worked at Google this week.";
//     } else {
//         return ("Google pay: $" + (400 * parseInt(google)));
//     }
// }
//
// console.log("The user entered " + google + " hours.");
// var google = parseInt(google);
// console.log(typeof(google));
// alert(numCheck1(google));
//
//
// var amazon = prompt('How many hours did you work at Amazon this week?');
//
// function numCheck2(amazon) {
//     if (amazon === null) {
//         return amazon.stop(true, false);
//     } else if (isNaN(amazon) || amazon === '') {
//         return ("Please enter the number of hours you worked at Amazon this week.");
//     } else {
//         return ("Amazon pay: $" + (380 * amazon))
//     }
// }
//
// console.log("The user entered " + amazon + " hours.");
// var amazon = parseInt(amazon);
// console.log(typeof(amazon));
// alert(numCheck2(amazon));
//
// var facebook = prompt('How many hours did you work at Facebook this week?');
//
// function numCheck3(facebook) {
//     if (facebook === null) {
//         return facebook.stop(true, false);
//     } else if (isNaN(facebook) || facebook === '') {
//         return ("Please enter the number of hours you worked at Facebook this week.");
//     } else {
//         return ("Amazon pay: $" + (350 * facebook))
//     }
// }
//
// console.log("The user entered " + facebook + " hours.");
// var facebook = parseInt(facebook);
// console.log(typeof(facebook));
// alert(numCheck3(facebook));
//
// function workTotal() {
//     if (!isNaN(google + amazon + facebook)) {
//         return "You earned $" + ((400 * google) + (380 * amazon) + (350 * facebook));
//     } else {
//         return "Error, please make sure each work time is entered as a number.";
//     }
// }
//
// alert(workTotal());
// console.log(workTotal());
// var workTotalInt = workTotal();
// console.log(typeof workTotalInt);
// console.log("Parsing total...");
// var workTotalInt = parseInt(workTotalInt.replace("You earned $", ""));
// console.log(workTotalInt);
// console.log(typeof workTotalInt);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// var classSize = confirm('Is the current amount of enrolled students less than 200?');
// console.log(confirm());
//
// var schedule = confirm("Do you have a class at 8AM?");
// console.log(confirm());
//
// function enrollment() {
//     if (classSize === true && schedule === true) {
//         return "Enrolled";
//     } else {
//         return "You cannot enroll at this time."
//     }
// }
//
// alert(enrollment());

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var cart = prompt('How many items would you like to buy?');
console.log("The user entered " + cart + " items.");
var cartCheckInt = parseInt(cart);
console.log(typeof cart);

function cartCheck(cart) {
        if (isNaN(cart) || cart === '') {
            return ("Please enter the number of items you would like to buy.");
        } else {
            return ("Added to cart")
        }
}

// alert(rentalTotal());
console.log(cartCheck());
// var cartCheckInt = cartCheck();
console.log(typeof cartCheckInt);
console.log("Parsing total...");
// var cartCheckInt = parseInt(cart);
console.log(cartCheckInt);
console.log(typeof cartCheckInt);
alert(cartCheck());

// var offerValid = confirm("Is the offer valid? (Check expiration date)");
//     console.log(confirm);
//
// var premium = confirm("Are you a premium member?");
// console.log(confirm());
//
// function productOffer() {
//     if ((cart >= 2 || premium === true) && offerValid === true) {
//         return ("Discount applied to cart.");
//     } else {
//         return ("Discount cannot be applied at this time.")
//     }
// }
//
// alert(productOffer());
