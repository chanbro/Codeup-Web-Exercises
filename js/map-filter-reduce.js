'use strict';

// // LECTURE
//
// //2^i until i = 16
// for(let i=0; i<16;i++){
//     console.log(2 ** i);
// }
//
// function explore() {
//     console.log(a);
//     console.log(b);
//     var a = 1; // declaring variable then assigning variable
//     let b = 2; // declaring and assigning variable
// }
//
// explore();
// // Output: undefined (cannot log a because the variable has not been declared, masks coding errors), ERROR: cannot access B before initialization (cannot log b because declared b cannot be accessed by the console)
//
// {
//     let secret = 100
// }
// console.log(secret);
// // referenced inside protected scope, cannot be returned to console
//
// let array = ['item 1', 'item 2', 'item 3', 'item 4'];
// // for each item in the array, console.log the item
// for (let item of array) {
//     console.log(item)
//     // some functionality interacting with objects in an array
// }
//
// let dog = {
//     name:'Pepe',
//     breed:'chihuahua'
// };
// //breaking the string to get data
// console.log(("Our " + dog.breed + ' is named ' + dog.name));
// // template strings do not break the strings
// console.log((`Our ${dog.breed} is named ${dog.name}`));
// // ***Using template strings to add to HTML***
// document.getElementById('message').innerHTML =
//     `<p>Our ${dog.breed} is named ${dog.name}</p>`;
//
// Arrow Functions
const ourFunction = function (name) {
    console.log((`Hello ${name}!`));
};
ourFunction('Europa');

// name sent to function instructions
const newFunction = name => {
    console.log((`Hello ${name}!`));
};
newFunction("Europa 2");

//for this function, if nothing is passed in return this value, otherwise return input value
const sayHello = (argument = 'default behavior') => `Hello ${argument}!`;
console.log(sayHello('other argument! An argument was put through the function!');
console.log(sayHello());

// EXERCISE
say
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

