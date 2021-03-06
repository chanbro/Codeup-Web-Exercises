"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var gameStart = confirm('Would you like to enter a number?');
//
// function confirmCheck(gameStart) {
//     if (gameStart === false)
//         return alert("You chose to not enter a number.") + gameStart.stop(true, false);
// }
// confirmCheck(gameStart);
//
// var numberString = prompt("Please enter a number.");
// console.log(numberString);
// console.log(typeof numberString);
//
// function numCheck(numberString) {
//     if (isNaN(numberString)) {
//         return alert("That is not a number. Please try again.") + numberString.stop(true, false);
//     } else {
//         return parseFloat(numberString);
//     }
// }
//
// var num = parseFloat(numCheck(numberString));
// console.log(typeof num);
//
// function evenOdd(num) {
//     if (num % 2 === 0) {
//         return "That's an even number!"
//     } else {
//         return "That's an odd number!"
//     }
// }
//
// alert(evenOdd(num));
//
// function negPos(num) {
//     if (num < 0) {
//         return "Your number is negative!"
//     } else {
//         return "Your number is positive!"
//     }
// }
//
// alert(negPos(num));
//
// function addHundred(num) {
//     return "Did you know " + num + " + 100 =" + (num + 100) + "?";
// }
//
// alert(addHundred(num));


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// `colors`: a list of the colors of the rainbow
// `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(randomColor) {
//     if (randomColor === 'red') {
//         return "Roses are red";
//     } else if (randomColor === 'orange') {
//         return "Traffic cones are orange";
//     } else if (randomColor === 'yellow') {
//         return "Bananas are yellow";
//     } else if (randomColor === 'green') {
//         return "Grass is green";
//     } else if (randomColor === 'blue') {
//         return "The ocean is blue";
//     } else if (randomColor === 'indigo') {
//         return "The night sky is indigo";
//     } else if (randomColor === 'violet') {
//         return "Violets are violet";
//     } else {
//         return ("I don't know anything about " + randomColor)
//     }
// }

// console.log(analyzeColor(randomColor));
// console.log(analyzeColor("pink"));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(randomColor) {
//     var colorMessage;
//
//     switch (randomColor) {
//         case ('red'):
//             colorMessage = "Roses are red";
//              break;
//         case ('orange'):
//             colorMessage = "Traffic cones are orange";
//             break;
//         case ('yellow'):
//             colorMessage = "Bananas are yellow";
//             break;
//         case ('green'):
//             colorMessage = "Grass is green";
//             break;
//         case ('blue'):
//             colorMessage = "The ocean is blue";
//             break;
//         case ('indigo'):
//             colorMessage = "The night sky is indigo";
//             break;
//         case ('violet'):
//             colorMessage =  "Violets are violet";
//             break;
//         default:
//             colorMessage = ("I don't know anything about " + randomColor);
//         break;
//     }
//     return colorMessage
// }
//
// console.log(analyzeColor(randomColor));
// console.log(analyzeColor("pink"));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userInput = prompt("What is your favorite color?");
//
// function analyzeColor(userInput) {
//     var colorMessage;
//
//     switch (userInput) {
//         case ('red'):
//             colorMessage = "Roses are red";
//              break;
//         case ('orange'):
//             colorMessage = "Traffic cones are orange";
//             break;
//         case ('yellow'):
//             colorMessage = "Bananas are yellow";
//             break;
//         case ('green'):
//             colorMessage = "Grass is green";
//             break;
//         case ('blue'):
//             colorMessage = "The ocean is blue";
//             break;
//         case ('indigo'):
//             colorMessage = "The night sky is indigo";
//             break;
//         case ('violet'):
//             colorMessage =  "Violets are violet";
//             break;
//         default:
//             colorMessage = ("I don't know anything about " + userInput);
//         break;
//     }
//     return colorMessage
// }
//
// console.log(analyzeColor(userInput));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber = ['0%', '10%', '25%', '35%', '50%', '100%'];
var randomLuckyNumber = luckyNumber[Math.floor(Math.random() * luckyNumber.length)];

// console.log(randomLuckyNumber);
// console.log(luckyNumber.indexOf(randomLuckyNumber));

function discount(randomLuckyNumber) {
    if (luckyNumber.indexOf(1) || luckyNumber.indexOf(2)) {
        return "Congratulations, you won " + luckyNumber.indexOf(randomLuckyNumber) + " off your purchase! Discount will be applied at checkout.";
    } else if (luckyNumber.indexOf(5)) {
        return "Congratulations, Your entire purchase will be free! Discount applied at checkout."
    } else {
        return "Sorry, you did not win a discount. Try again later!";
    }
}

alert(discount(randomLuckyNumber));
//     if (luckyNumber.indexOf(0)) {
//         return "Sorry, you did not win a discount. Try again later!";
//     } else if (luckyNumber.indexOf(5)) {
//         return "Congratulations, Your entire purchase will be free! Discount applied at checkout."
//     } else {
//         return "Congratulations, you won " + luckyNumber[luckyNumber.indexOf(randomLuckyNumber)] + " off your purchase! Discount will be applied at checkout."
//     }
// }

// alert(discount(randomLuckyNumber));
// console.log(randomLuckyNumber);
// console.log(luckyNumber.indexOf(randomLuckyNumber));
// function calculateTotal(randomLuckyNumber) {
//     var tipPercentage = tipPercentage.replace("%", "");
//     var tipPercentage = (tipPercentage * .01);
//     var meal = meal.replace("$", "");
//     return (meal * tipPercentage);
// }
//
// console.log(parseFloat(tipTotal(meal, tipPercentage)).toFixed(2));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);