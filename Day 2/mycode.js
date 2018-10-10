var multiplier = 1;

while (multiplier <= 12) {
    console.log(9 * multiplier);
    multiplier ++;
}

// *****************************************************************
// Below is a snippet of code to produce a times table from 1 - 12

// while (multiplier <= 12) {
//     var counter = 1;
//     while (counter <= 12) {
//     console.log(counter * multiplier);
//     counter++;
//     }
//     multiplier ++;
// }


// *****************************************************************
// Below is a code that also produces a times table from 1 - 12 but using a for loop instead. NOTE: Used base instead of multiplier so avoid commenting out
for (base = 1; base <= 12; base++) {
    for (counter =1; counter <= 12; counter ++) {
        console.log(base + " x " + counter + " = " + (base * counter))
    }
}

// *****************************************************************
// This code uses % to determine whether or not all numbers between 1 - 20 are even of odd
for (num = 1; num <= 20; num ++) {
    if (num % 2 == 0) {
        console.log(num + ' is even')
    }
    else {
        console.log(num + ' is odd')
    }
}

// *****************************************************************
// This example is the same as the for loops for making a 1 - 12 times table, but skips the equation anytime the number 6 is a numerator.
// for (base = 1; base <= 12; base++) {
//     for (counter =1; counter <= 12; counter ++) {
//         if (base % 6 == 0) {
//             base ++;
//         }
//         else if (counter % 6 == 0) {
//             counter ++;
//         }
//         console.log(base + " x " + counter + " = " + (base * counter))
//     }
// }

// *****************************************************************
// Below we created an array, and experimented with .length, .push, and how to index an item.
var favFoods = ['cookies', 'coffee', 'sushi', 'steak', 'beer'];
console.log(favFoods);
console.log(favFoods.length);
console.log('favFoods'.length);
console.log(favFoods[2]);
favFoods[1] = 'tea';
console.log(favFoods);
favFoods.push('sour candy');
console.log(favFoods);

// *****************************************************************
// Using a for loop to print a list of array items.
for (var i = 0; i < favFoods.length; i ++) {
    console.log(favFoods[i]);
}

// Below is an example of an object. Inside an object is a 'key: value'
var favRecipe = {
    recipeTitle: "Andy's Favorite Recipe",
    recipeDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, aliquid tenetur enim fugiat cum mollitia sed! Eum consectetur maxime, necessitatibus praesentium commodi maiores non animi ad dolores porro cumque esse!",
    ingredients: ['eggs', 'milk', 'flour', 'sugar'],
    directions: "Blah blah blah",
    rating: 5,
    cookTime: 28,
}

// console.log(favRecipe);
// console.log(favRecipe.recipeTitle);
// console.log(favRecipe.rating);

// var neededIngredients = favRecipe.ingredients;
// console.log(neededIngredients);

favRecipe.servings = 8;
favRecipe.rating = 4;
delete favRecipe.cookTime;
console.log(favRecipe);

// *****************************************************************
// Arrays of Objects
var movies = [
    {name: 'Pulp Fiction', rating: 10},
    {name: 'Inglorious Bastards', rating: 9},
    {name: 'Kill Bill', rating: 7}
]

for (var x = 0; x < movies.length; x ++) {
    console.log('I give ' + movies[x].name + ' ' + movies[x].rating + ' stars out of 10.');
}

// *****************************************************************
// Object within a Function
function recipeDetails (recipe) {
    console.log('The name of this recipe is ' + recipe.recipeTitle + ' and its ingredients are ' + recipe.ingredients)
}

recipeDetails(favRecipe);

// *****************************************************************
// Function within a Object
favRecipe.letsCook = function(recipe) {
    console.log('Im hungry! Lets cook ' + recipe.recipeTitle)
}

favRecipe.letsCook(favRecipe);
