// ****************************************************************************************************************
// History object can be used in the console to navigate history.
// Example:
// history.back();
// history.forward();
// history.go(-2);


// ****************************************************************************************************************
// Location object provides information about the current pages location
// Example:
// location.replace('mypage.html) -----> This removes current page from history stack and replaces it with new page
// location.href = 'mypage.html' -----> This goes to new page and adds it to the stack of the history page


// ****************************************************************************************************************
// Navigator object provides information about browser and the operating system which its running
// Example:
// navigator.userAgent; -----> Returns something like this: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
// navigator.vendor; -----> Returns something like this: "Google Inc."
// navigator.platform; -----> Returns something like this: "Win 32"


function locationHref() {
    location.Href='#top';
}

function locationReplace() {
    location.replace('#top');
}

// ****************************************************************************************************************
// In this example, the navigator.geolocation makes an allow/deny pop up window appear asking for location.
// If allow is clicked, success function runs. If block/cancel is click, geoError function runs.
// The links betweem allow/deny to success/geoError are built into javascript & the browser. 


navigator.geolocation.getCurrentPosition(success, geoError);


// In this version of the navigator.geolocation, it checks to confirm that navigator.geolocation is true so that the browser is able to understand it.
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, geoError);
//     }
    
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    document.write(latitude + ", " + longitude) ;
}

function geoError(errorObj) {     
    alert("Uh oh, something went wrong");
}

console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);

// ****************************************************************************************************************
// The Document Model is the most commonly used. It is used to manipulate content of the HTML document 
// Example:
// document.images; -----> This would create a list of images on the page.
// document.images[0]; -----> 1st image on page
// document.images[3]; -----> 3rd image on page
// document.images.length; -----> Returns how many images are on the page
// document.links.length; -----> Returns how many links are on the page


document.bgColor = "lightblue";
