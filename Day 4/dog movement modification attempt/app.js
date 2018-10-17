var name = prompt('Welcome! What is your name?');

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
        img.style.transform = 'scaleX(-1)';
        img.style.left = (imgLeft - direction) + 'px';
    }
}


setInterval(dogMove, 30);

localStorage.userName = name;


