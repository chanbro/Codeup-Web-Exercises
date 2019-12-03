"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over

// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
// var isAdmin = true
// if(isAdmin) {
//     //show admin navbar
//         alert("User is an admin");
//     //showAdminNavbar() function
// } else {
//     console.log("user is regular user");
// }

//TODO Together: Send a 20% off coupon if its users birthday
// if(isBirthday) {
//     //send 20% off
//     // sendBirthdayEmail
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = false;
// if(isRainy) {
//     alert('it is raining')
// } else {
//     alert("Have a nice day!")
// }
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var currentBalance = 200;
// var itemCost = 100;
// function wallet(currentBalance, itemCost) {
//     if (itemCost <= currentBalance) {
//         return "You have enough money for this item."
//     } else {
//         return "You do not have enough money for this item."
//     }
// }
// alert(wallet(currentBalance, itemCost));

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// function checkGameOver(numberOfLives) {
//     if (numberOfLives <= 0) {
//         return alert("Sorry, game over")
//     } else {
//         return alert("Next Level!")
//     }
// }
// checkGameOver(1);
// checkGameOver(0);

function checkIfGameIsOver(numberOfLives){
    var returnMessage;
    if (numberOfLives === 0) {
        returnMessage = "Game Over"
    } else {
        returnMessage = "Next Level"
    }
    return returnMessage;
}
checkIfGameIsOver(4);
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// function checkWeather(weather) {
//     if (weather === "snowing") {
//         return alert("It's snowing!")
//     } else if (weather === "raining") {
//            return alert("It's raining!")
//     } else {
//         return alert("Check back later for more details. Have a nice day!")
//     }
// }
// checkWeather("snowing");
//  checkWeather("raining");
// checkWeather("sunny");

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// function greaterThanTen(numberInput) {
//     if (numberInput > 10) {
//         return alert("This number is greater than 10")
//     } else {
//         return alert("This number is less than 10")
//     }
// }
// greaterThanTen(10);
// greaterThanTen(11);
// greaterThanTen(9);


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//I did these exercises above, since I had already written out previous examples as if/else functions
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// function ageCheck(userAge) {
//     if (userAge >= 13) {
//         return alert("You may proceed.");
//     } else {
//         return alert("Sorry, you are not able to proceed.");
//     }
// }
//
// ageCheck(12);
// ageCheck(13);
// ageCheck(55);

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

var lightColor = prompt("What color is the traffic light?");
// function trafficLightInstructions(lightColor) {
//     if (lightColor === "green") {
//         return alert("You may proceed through the intersection.")
//     } else if (lightColor === "yellow") {
//         return alert("You should slow down, but you're probably going to speed up :)")
//     } else if (lightColor === "red") {
//         return alert("You should stop before the intersection.")
//     } else {
//         return alert("That is definitely not a traffic light color...")
//     }
// }
// trafficLightInstructions(lightColor);

switch (lightColor) {
    case (lightColor === "green"):
        alert("You may proceed through the intersection.");
        break;
    case (lightColor === "yellow"):
        alert("You should slow down, but you're probably going to speed up :)");
        break;
    case (lightColor === "red"):
        alert("You should stop before the intersection.");
        break;
    default:
        alert(lightColor + "? That is definitely not a traffic light color...");
        break;
}

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

