// var pet1 = "Toby";
// var pet2 = "Princess";
// var pet3 = "Samson";
// var pet4 = "Jill";
// var pet5 = "Bubbles";
// var pet6 = "Malu";

// "Code stench": no relationship between variables

var pets = [];
// or var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu"];

pets[0] = "Toby";
pets[1] = "Princess";
pets[2] = "Samson";
pets[3] = "Jill";
pets[4] = "Bubbles";
pets[5] = "Malu";

console.log(pets); //output: (6) ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu"]
console.log(pets[4]); // "Bubbles"
// Assigning index to each variable to be included in array

pets[100] = "Lily";
console.log(pets); // output: (101) ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", empty × 94, "Lily"]
// Creates empty variables until variable is assigned

for (var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
} // output: pet names in individual lines of code; 94 undefined; Lily

pets[pets.length] = "Lily";
console.log(pets[pets.length-1]);

pets.forEach(function (pet, i, arr) {
    console.log(pet)
});
// .forEach(): executes provided function once for each array element
// 3 parameters, order matters:
// Element: current item being processed array  (ex. "Toby", "Samson", "Lily" etc.)
// Iterator variable: current index (i) being processed in the array
// Variable: the array being passed through function

// var salePrices = [9.99, 7.99, 5.99, 3.99];
//
// console.log(salePrices);
// console.log(typeof salePrices); //object
//
// var variableName = [[], [], []];
// Array that is referencing other arrays
// Ex: variableName[2] returns Array 3
// Assigning variables to indexes within an array of arrays:  variableName[0][0] = x means set array 0's index of 0 to x;
// variableName[1][0] = o means set Array 1's index of 0 to o

var tictactoe = [[' '], [' '], [' '],
                [' '], [' '], [' '],
                [' '], [' '], [' ']];
var takeTurn = function (who, row, column) {
    for (var i = 0; i < tictactoe.length; i++) {
        console.log(" " + tictactoe[i][0]) + " | " + tictactoe[i][1] + " | " + tictactoe[i][2]
        console.log("_________");
    }
}