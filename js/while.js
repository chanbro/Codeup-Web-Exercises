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