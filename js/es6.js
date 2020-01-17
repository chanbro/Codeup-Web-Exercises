/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

console.log(users);

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

let myProfile = {
  name: 'chaney',
  email: 'chaney@codeup.com',
  languages: ['html', 'css', 'javascript']
};
users.push(myProfile);

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'test';
const email = 'test@test.com';
const languages = ['test'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});
// key value pairs

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => {
  return emails.push(user.email);
});

for (let user of users) {
  emails.push(user.email)
}
console.log(emails);

users.forEach((user) => {
  return names.push(user.name);
});

for (let user of users) {
  names.push(user.name)
}
console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;
  console.log(user);

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages}`);
  console.log(developers);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

for (let developer of developers) {
  // TODO: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';

// document.getElementById('message').innerHTML = list;