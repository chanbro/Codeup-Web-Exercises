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
// // Arrow Functions
// const ourFunction = function (name) {
//     console.log((`Hello ${name}!`));
// };
// ourFunction('Europa');
//
// // name sent to function instructions
// const newFunction = name => {
//     console.log((`Hello ${name}!`));
// };
// newFunction("Europa 2");
//
// //for this function, if nothing is passed in return this value, otherwise return input value
// const sayHello = (argument = 'default behavior') => `Hello ${argument}!`;
// console.log(sayHello('other argument! An argument was put through the function!'));
// console.log(sayHello());

// // Mapping
//
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
//
// // Mapping extracts value
// const hamsterNames = hamsters.map(hamster => hamster.name);
// console.log(hamsterNames);
//
// let furColors = [];
// hamsters.map(hamster => {
//     hamster.fur.map(color => furColors.push(color))
// });
// console.log(furColors);
//
// // Filter extracts particular item or items based on condition
// let isMale = hamsters
//     // finds gender: 'male'
//     .filter(hamster => hamster.gender === 'male')
//     // finds name of all who meet gender: 'male"
//     .map(hamster => hamster.name);
// // returns names that are males
// console.log(isMale);
//
// // // Filter extracts particular item or items based on condition
// // let isMale = hamsters
// //     // finds gender: 'male'
// //     .filter(hamster => hamster.gender === 'male')
// //     // finds name of all who meet gender: 'male"
// //     .map(hamster => return {name:hamster.name, gender:hamster.gender});
// // // returns names that are males
// // console.log(isMale);
//
// // Reduce narrows down array item by item to return to final value
// let totalHamsterHeight = hamsters.reduce(((totalHeight, hamster) => totalHeight + hamster.heightInMM), 0);
// let avgHamsterHeight = totalHamsterHeight / hamsters.length;
// console.log(avgHamsterHeight);

// let avgHamsterHeight = hamsters.reduce();

// EXERCISE

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


let threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

let emails = [];
users.map(user => emails.push(user.email));
console.log(emails);

let totalUsersExperience = users.reduce(((totalExperience, user) => totalExperience += user.yearsOfExperience), 0);
let avgUsersExperience = totalUsersExperience / users.length;
console.log(avgUsersExperience);

let longestEmail = '';
users.reduce(((letterCount, user) => {
    if (user.email.length > letterCount) {
        letterCount = user.email.length;
        longestEmail = user.email;
    }
    return letterCount
}), 0);
console.log(longestEmail);

let instructors = users.reduce(((str, user) => str += `${user.name} `), 'Your codeup instructors are: ');
console.log(instructors);

// const instructorsNames = users.reduce((nameCount, nameList) => {
//     return nameCount + " " + nameList.name
// }, 'your instructors are: ');

// console.log(instructorsNames);

// const knownLanguages = users.reduce(((language, user) =>
//     language + ` ${user.languages} `), '');
// console.log(knownLanguages);

const knownLanguages = users.reduce((languages, user) => {
    for (let language of user.languages) {
        if (!languages.includes(language)) {
            languages.push(language)
        }
    }
    return languages;
}, []);

console.log(knownLanguages);