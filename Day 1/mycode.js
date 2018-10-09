// alert('hello'): open a popup box
// console.log('hello'): display a message in your console
// document.write('hello'): add something to the page
// ------------------------------------------------------------------------

alert('Hello World!');
console.log('Secret Message');

var firstName = 'Andy';
var lastName = 'Aylward';
alert('Hey! My name is ' + firstName + ' ' + lastName);
console.log(firstName, lastName);
document.write(firstName + ' ' + lastName);

var numberOfStudents = 26;
var sickStudents = 4;
var presentStudents = numberOfStudents - sickStudents;
console.log(presentStudents);

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[0].toUpperCase());
console.log(alphabet[12].toUpperCase());
console.log(alphabet[25].toUpperCase());

// ------------------------------------------------------------------------
// Below this comment I defined a funtion called sentence. It takes no parameters and just logs a simple sentence to the console. I then called said function.

function sentence() {
   console.log ('this is my sentence within a function')
}

sentence();

function nameCombine (first, last) {
    return (first + ' ' + last) 
}

console.log(nameCombine ('Patrice', 'Bergeron')); 

// ------------------------------------------------------------------------
// "=" is for assigning values, while "==" is for checking if the left side is equal to the right, and "===" checks if both sides are identical.
// for example, var = 12, 50 == "50", 43 === 43, "99" === "99". All of these statements are true.
// ------------------------------------------------------------------------

var temperature = 14;
var wearingHat = true;

if (temperature < -20) {
    console.log('Its cold as fuck! Stay inside!')
} 
else if (temperature < 0) {
    console.log('Its really cold! Wear a coat and a hat!')
}
else if (temperature < 10) {
    console.log('Its cold! Put a coat on!')
}
else if (temperature > 10 && wearingHat == false){
    console.log('Its alright out, but dont forget your hat!')
}
else {
    console.log('Its alright out, wear whatever you want.')
}

// ------------------------------------------------------------------------

