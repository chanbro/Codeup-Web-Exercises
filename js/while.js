// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 1;
// while (i <= 16) {
//     console.log(Math.pow(2, i++))
    // // }
    //
    // // An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
    //
    // // // This is how you get a random number between 50 and 100
    // var allCones = Math.floor(Math.random() * 50) + 50;
    // // // // This expression will generate a random number between 1 and 5
    // var randomOrder = Math.floor(Math.random() * 5) + 1;
    //
    // function sellCones() {
    //     var allCones = allCones - randomOrder;
    //     if (allCones >= randomOrder) {
    //         return console.log("Here are " + randomOrder + " cones.") //if new allCones is greater than or equal to randomOrder, then say "Here are randomOrder cones"
    //     } else if (allCones < randomOrder) {// otherwise if new allCones is less than randomOrder say ("Sorry, I only have new allCones cones left."
    //         return console.log("Sorry, I don't have enough cones.")
    //     } else {// otherwise once new allCones === 0 say "Time to go home!"
    //         return console.log("Time to go home!")
    //     }
    // }


var allCones = Math.floor(Math.random() * 50) + 50;

function sellCones() {
    var randomOrder = Math.floor(Math.random() * 5) + 1;
    var remainingCones = allCones - randomOrder;

    if (remainingCones < randomOrder) {
        return console.log("Sorry, I don't have enough cones.")
    } else if (remainingCones === 0) {
        return console.log("Time to go home!")
    } else {
        return console.log("Here are " + randomOrder + " cones.")
    }
}

    do {
        sellCones()
    } while (sellCones() !== "Time to go home!");




    //EXERCISE ANSWERS FROM CLASS


// var x = 2;
//
// while(x <= 65536){
// 	console.log(x);
// 	x *= 2;
// 	// x = x * 2;
// }

// 1. Generate total amount of cones - happens one time --> allCones

// 2. Customer wants to buy x amount of cones --> conesPurchased
// 3. We need to check to see if we have that amount of cones available
// 4. If not (sad path) --> sorryMessage
// 5. If we do have enough cones (happy path) --> happyConesMessage
//      subtract the amount of cones sold from allCones
// 6. repeat until I dont have any cones left --> allCones > 0

// This is how we get total number of cones to sell
// var allCones = Math.floor(Math.random() * 50) + 50;
//
//
// do{
//     //This is how many cones are purchased by each customer
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//     //checks if I have enough cones to sell
//     if(conesPurchased > allCones){
//         // sad path - i cant sell you cones because i dont have enough
//
//         var sadConesMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + "....";
//
//         console.log(sadConesMessage);
//
//
//     } else {
//         //happy path - I can sell you cones! because I have enough
//         allCones -= conesPurchased;
//
//         var happyConesMessage = conesPurchased + " cones sold ... " + allCones + " cones to go";
//         console.log(happyConesMessage);
//     }
//
//
// } while (allCones > 0)
//
// console.log("yay i sold all the cones");
