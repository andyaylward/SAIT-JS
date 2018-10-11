var imgReynolds = document.getElementById('reynolds');
console.log(imgReynolds);

// ***** THIS METHOD RETURNS ALL LI ELEMENTS
// var listItems = document.getElementsByTagName('li');
// console.log(listItems);

// ***** THIS METHOD RETURNS ALL ELEMENTS WITH CLASS 'item'
// var listItems = document.getElementsByClassName('item');
// console.log(listItems);

// ***** THIS METHOD ALSO RETURNS ALL LI ELEMENTS BUT BY ANOTHER METHOD (querySelectorAll instead of getElementsbyClassName)
var listItems = document.querySelectorAll('.item');
console.log(listItems);

var firstItem = document.querySelector('li');
console.log(firstItem);

console.log(listItems[0].classList);

var paragraphElement = document.getElementsByTagName("p");
console.log(paragraphElement[1]);

imgReynolds.src = 'https://www.cs.trinity.edu/~mgiannin/iMages/Andrew%20Reynolds.jpg';
console.log(imgReynolds);


// USING getElementById TO MANIPULATE CSS VIA JAVASCRIPT
var footer = document.getElementById('footer');
footer.style.backgroundColor = 'grey';

var main = document.getElementById('main');
main.style.backgroundColor = 'lightGrey';

var header = document.getElementById('header');
header.style.color = 'white';
header.style.backgroundColor = '#222';


// USING getElementById TO MANIPULATE HTML CONTENT VIA JAVASCRIPT
var siteHeading = document.getElementsByTagName('h1')[0];
siteHeading.innerHTML = "Andy's Javascript Test Page!"

// CREATING NEW NODES
var newParagraph = document.createElement('p');
var paragraphContent = document.createTextNode('Taken on GSD 2009');
newParagraph.append(paragraphContent);
document.getElementsByTagName('div')[2].append(newParagraph);
