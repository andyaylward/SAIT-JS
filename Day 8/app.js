// ************************************************
// In this example, our variable is stored globally. Not recomennded because this can cause overlaps in variables by developers
var greet = 'Hello!'
console.log(greet)

// In this example we store the variable in a function, and then call the function
function greetPerson(){
    var greet = 'Hi!'
    if (greet) {
        console.log(greet)
    }
}
greetPerson();

// In this example, the function is immediatly invoked, meaning it will run automatically without being called
(function (){
    var greet = 'Yo!'
    if (greet) {
        console.log(greet)
    }
})();

// ************************************************
// The difference between these two codes is the use of 'let' and 'var'
// If you use var = i, it is accesible outside the loop. 
// If you use let = x, it is not accesible outside the loop.
for (var i = 1; i < 10; i++){
}
console.log(i);

for (let x = 1; x < 10; x++){
}
// console.log(x);

// ************************************************
// Here we can log 'a' inside the if statement, but not outside
let condition = true;

if (condition) {
    let a = 'Zeta';
    console.log(a);
}
// console.log(a);

// ************************************************
// Below is a const example. Const variables should never be changed (but you can add to / modify them), and are usually declared in all caps to make them easier to notice they are const and not var or let
const ARRAY = ['Boston Bruins', 'Calgary Flames'];
console.log(ARRAY);
ARRAY.push = 'San Jose Sharks';
console.log(ARRAY);

const USER = {name: 'Andy', id: 666}
console.log(USER);
USER.id = 420;
USER.hometown = "St. John's"
console.log(USER);

// ************************************************
// Arrow function examples
function oldOne() {
    console.log('old style');
}
// same as
var newOne = () => console.log('new style');

// Another arrow function example
function oldie(x, y) {
    console.log(x + y)
}
oldie(3, 4)
// same as
var newNew = (x, y) => console.log(x + y);
newNew(6, 6)

// A third arrow function exmaple
function insertWord(word) {
    console.log('Im feeling ' + word)
}
insertWord('cool');
// same as
var insertWordNew = (word) => {console.log('Im very ' + word)}
insertWordNew('sleepy');


const fibonacci = (n) => {
    if (n<3){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(9));

// ************************************************
// Default paramters
let multiply = (a,b=1) => {
 console.log(a * b);
}
// This would log 20, because we are making a = 20, and b is default 1
multiply(20); 

// This would log 40, as we made a=20, and changed b to equal 2 instead of the default 1
multiply(20, 2);

// ************************************************
// FOR OF LOOP

let exampleArray = [101,102,103,104,105,106,107];

for (let value of exampleArray) {
    console.log(value);
}

// ************************************************
// SPREAD/REST Operators
// These operators look the same (...) and operate depending on whether the input paramter is an array or list

// This converts our paramters into an array
let createArray = (...newArray) => {
    console.log(newArray)
}

createArray(1,2,3)

// This converts our paramters from an array into just a regular list
let createList = (...newList) => {
    console.log(newList)
}

createList([7,8,9])

// ************************************************
// Ternary Operators
let zone = 'East'

if(zone=='East'){
    shippingCharge = 15.00;
} else {
    shippingCharge = 10.00;
}

// Is the same as
shippingCharge = (zone=="East") ? 15.00 : 10.00;

// ************************************************

const dog = {
    name: 'Pupper',
    breed: 'Corgi',
    age: '1',
    gender: 'his'
}

const className = 'dogInfo';
const html = `<div class=${className}><h1>${dog.name}</h1><p>${dog.name} is ${dog.age} years old and ${dog.gender} breed is a ${dog.breed}</p></div>`
document.getElementById('target').innerHTML = html;

// ************************************************
// Destructing an object?
const myEmployee = {
    active: true,
    department: 'Engineering'
};

function isActiveEngineer(employee){
    const {active, department} = employee
    return department === 'Engineering' && active;
}

console.log(isActiveEngineer(myEmployee));

// ************************************************
// using .forEach, .every, .some, and .filter

const trips = [
    {mph: 10, hours: 3},
    {mph: 30, hours: 2},
    {mph: 25, hours: 4}
];

trips.forEach(trip => {
    console.log(trip.mph * trip.hours);
});

//  arr.every works similar to an AND gate. 
//  arr.some works silimar to an OR gate.

const availableLaptops = [
    {name: 'MacBook', RAM: 8},
    {name: 'Asus', RAM: 32},
    {name: 'Lenovo', RAM: 16},
    {name: 'HP', RAM: 4},
];

// Checks if every laptop has 16 or more gb of RAM, returns false
const everyLaptop16RAM = availableLaptops.every(laptop => 
    laptop.RAM >= 16);

console.log(everyLaptop16RAM);

// Checks if some laptops have 16 or more gb of RAm, returns true
const someLaptop16RAM = availableLaptops.some(laptop => 
   laptop.RAM >= 16);

console.log(someLaptop16RAM);

// arr.filter will filter results based on desired criteria
const groceries = [  
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4},
    { name: 'lettuce', aisle: 'produce', price: 5 },
    { name: 'olive oil', aisle: 'baking', price: 10 },
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];

const produceLessThan5 = groceries.filter(item => 
    item.price < 5 && item.aisle === 'produce');

console.log(produceLessThan5)

// arr.map creates a new array by modifying a pre existing one
const drives = [
    {miles: 5, hours: 1},
    {miles: 6, hours: 0.5},
    {miles: 4, hours: 2},
]

const speeds = drives.map(drive => 
    drive.miles * drive.hours);

console.log(speeds);

// arr.find finds the first element that evaluates as true based on desired criteria
const posts = [  
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...'},
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...'},
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...'}
];

const currentId = 29;
const currentPost = posts.find(post => 
    currentId === post.id);

console.log(currentPost);

// arr.reduce
const numbers = [5,10,15];

const sum = numbers.reduce(function(currentSum, number){
    return currentSum + number;
}, 0);

console.log(sum);

// QUIZ ANSWERS
// --------------------------------------------------------------------
// 1. You need to check if all elements in an array are integers. 
// 1. .every()

// 2. You have an array of blog posts and need to output each post on the page.
// 2. .forEach()

// 3. You need to check if an array has at least one element that isn't null.
// 3. .some()

// 4. You have an array of expenses and need to calculate your total expenses lastmonth.
// 4. .reduce()

// 5. You need a new array to store the square root of each item in an existing array.
// 5. .map()

// 6. You have an array of computers, but only need computers with more than 16GB of RAM.
// 6. .filter()

// 7. You have an array of blog posts, and need to retrieve one post by its ID.
// 7. .find()