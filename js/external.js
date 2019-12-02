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
//         return userInput + " is my favorite color too!";
//     else
//         return "You entered " + userInput + ".";
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

var movie1 = prompt('How many days would you like to rent "The Little Mermaid?"');

function numCheck(movie1) {
    if (isNaN(movie1))
        return "Please enter the length of your rental.";
    else
        return "Added to cart";
}

alert(numCheck(movie1));
console.log("The user entered " + movie1);


var movie2 = prompt('How many days would you like to rent "Brother Bear?"');

function numCheck(movie2) {
    if (isNaN(movie2))
        return "Please enter the length of your rental.";
    else
        return "Added to cart";
}

alert(numCheck(movie2));
console.log("The user entered " + movie2);


var movie3 = prompt('How many days would you like to rent "Hercules"');

function numCheck(movie2) {
    if (isNaN(movie2))
        return "Please enter the length of your rental.";
    else
        return "Added to cart";
}

alert(numCheck(movie3));
console.log("The user entered " + movie3);

function rentalTotal() {
    if (!isNaN(movie1 + movie2 + movie3)) {
        return (3 * (movie1 + movie2 + movie3));
    } else {
        return "Error, please make sure each rental time is entered as a number.";
    }
}

alert("Your total is $" + rentalTotal());