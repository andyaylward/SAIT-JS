// Set Data
localStorage.setItem("username", "AndyAylward");
// or
localStorage.firstName = "Andy";

// Get Data
var username = localStorage.getItem('username');
// or
var firstName = localStorage.firstName;

console.log(username);
console.log(firstName);


// Remove Data
localStorage.removeItem('username');
localStorage.username = null;

//  localStorage.clear(); will remove all keys and values in local storage 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data[2].name);
        console.log(data[7].email);
        console.log(data[9].username);
    })

// ***********************************************************
// Using fetch API to send data
// create the content that you want to send
var user = {
    username: 'AndyAylward',
    id: 420
}

// Method 1: sendData when function called:
// fetch the url
function sendData(url){
    fetch(url, {
        // set your method
        method: 'POST',

        // set your headers
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

sendData('https://jsonplaceholder.typicode.com/users');

// ***********************************************************
// // Method 2: sends data auto
// // fetch the url
// fetch('https://jsonplaceholder.typicode.com/users', {
//     // set your method
//     method: 'POST',

//     // set your headers
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     body: JSON.stringify(user)
// })
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })

// ***********************************************************
// how to handle errors with fetch API
fetch('https://jsonplaceholder.typicode.com/404')
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return reponse.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log('The error', error)
    })