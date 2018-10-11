var kittyImg = document.createElement('img');
var puppyImg = document.createElement('img');
kittyImg.src = 'http://placekitten.com/200/300';
puppyImg.src = 'http://www.placepuppy.net/1p/400/250';


if (Modernizr.geolocation) {
    document.getElementById('main').append(kittyImg);
} else {
    document.getElementById('main').append(puppyImg);
}

var pageBackground = document.querySelector('body');

if (history.length < 3) {
    pageBackground.style.backgroundColor = 'lightBlue';
} else {
    pageBackground.style.backgroundColor = '#FFB732';
}

document.getElementById('heading').style.color = 'white';

var navList = document.getElementsByTagName('li');

console.log(navList);


for (i = 0; i < navList.length; i++) {
    if (i % 2 == 0){
        document.getElementById(navList[i].style.backgroundColor = 'red');
    } else{
        document.getElementById(navList[i].style.backgroundColor = 'white');
    }
}


