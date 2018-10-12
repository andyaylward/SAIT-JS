// console.log(new Date());

// Setting Div position ton absolute and giving it a width and height
// var square = document.getElementById('divOne');
// square.style.position = 'absolute';
// square.style.left = '100px';
// square.style.top = '50px';

// A function that changes the div's color within 2 seconds, and moving it right 200px.
// function changeDivColor (){
//     square.style.backgroundColor = 'darkBlue';
//     square.style.left = '200px';
//     square.style.transition = '2s';
// }

// var timerId = setTimeout(changeDivColor, 2000);

// This clearTimeout stop the timer in the timerId variable from working
// clearTimeout(timerId);

// Displaying a date that is updated every second
// function dateDisplay() {
//     document.getElementById('date').innerHTML = new Date();
// }
// setInterval(dateDisplay, 1);


// Creating a gif that moves back and forth between page boundaries
var moveForward = true;
var direction = 10;

function dogMove () {
    var img = document.getElementById('dog');
    var imgLeft = parseInt(img.style.left);

    // the if statement below prevents the img from continuing to go right, out of the page
    if (moveForward && (imgLeft > (window.innerWidth - img.width))) {
        moveForward = false;
    }

    // the if statement below prevents the img from continuing to go left, out of the page
    if (!moveForward && (imgLeft <= 0)) {
        moveForward = true;
    }

    // the if statement below moves the image to the right by X amount of pixels everytime it is evaluated by the interval. Where X = direction
    if (moveForward) {
        img.style.left = (imgLeft + direction) + 'px';
    } 

    // the else statement below moves the image to the left by X amount of pixels everytime it is evaluated by the interval. Where X = direction
    else {
        img.style.left = (imgLeft - direction) + 'px';
    }
}

dogMove()
//setInterval(dogMove, 80);




