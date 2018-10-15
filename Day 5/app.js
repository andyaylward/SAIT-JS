// You can use dot notation to target forms/inputs
var userForm = document.userForm;

var ratingForm = userForm.rating;
var firstName = userForm.firstName;
var lastName = userForm.lastName;
var emailForm = userForm.email; 

console.log(ratingForm);
// or you can use this
console.log(userForm.rating);

console.log(firstName);
// or you can use this
console.log(userForm.firstName);

console.log(lastName);
// or you can use this
console.log(userForm.lastName);

console.log(emailForm);
// or you can use this
console.log(userForm.email);

// console.log(userForm.email.value) will log the value entered in the email input
// console.log(userForm.firstName.type) will log the type of input this is

userForm.firstName.focus();
userForm.email.blur();

// --------------------------------------------------------------------------------

var monsterForm = document.monsterForm;

var feature = monsterForm.feature;

for (i=0; i < feature.length; i++) {
    if (feature[i].checked){
        console.log(feature[i].value);
        document.getElementById('featureList').append((feature[i].value + ', '));
    }
}

// --------------------------------------------------------------------------------

var submitButton = document.form3.submit;

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(userForm.firstName.value);
})

// --------------------------------------------------------------------------------

console.log(/abc/.test('abcde'));
console.log(/abc/.test('abhc'));