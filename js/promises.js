// //Will I Get A Phone analogy:
//
// const isMomHappy = true;
//
// //Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => {
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );
//
// const showOffPhone = function (phone) {
//     const message = `Hey friend, I have a new ${phone.color} ${phone.brand}`;
//     return Promise.resolve(message);
// };
//
// // Call Promise
// const askMom = function() {
//     willIGetNewPhone
//         .then(showOffPhone)
//         .then(fulfilled => console.log(fulfilled))
//         .catch(error => console.log(error.message));
// };
//
// askMom();

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

//EXERCISE

// let wait = (num) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve();
//         }, num)
//
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//
// function getGithubUsernames(username) {
//     return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`, {
//         headers: {
//             'Authorization': githubToken,
//             'Accept': 'application/vnd.github.cloak-preview'
//         }
//     })
//         .then(response => response.json())
//     // .then(users => users.map(user => user.login));
// }
//
//
// console.log(getGithubUsernames());
// console.log(getGithubUsernames('chanbro'));

// const lastCommit = (username) => {
//     return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`,
//         {headers: {
//             'Authorization': githubToken,
//             'Accept': 'application/vnd.github.cloak-preview'
//         }})
//         .then(response => response.json())
//         .then(response => {
//             //shows response object with which to reference most recent commit name and date in items[0]
//             console.log(response);
//             let name = response.items[0].commit.author.name;
//             let date = response.items[0].commit.author.date;
//             console.log(`Last commit was on ${date} by ${name}`)
//         });
// }
//
// console.log(lastCommit('chanbro')); //Promise object

const lastCommit = username => {
    let url = `https://api.github.com/users/${username}/events/public`;
    fetch(url, {headers: {
            'Authorization': githubToken,
        }})
        .then(data => data.json())
        .then(data => console.log(data))
};

lastCommit('chanbro');




