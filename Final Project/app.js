// *****************************************************************************************
// BURGER MENU JAVASCRIPT
// Invoked function that makes side menu appear when burger icon clicked
(function () {
    var burger = document.getElementById('burger');
    var mobileMenu = document.getElementById('mobileMenu');
    
    burger.addEventListener('click', function(event) {
    event.preventDefault();
    mobileMenu.classList.toggle('mobileHide');
    mobileMenu.classList.toggle('mobileShow');
    })
})()

// *****************************************************************************************
// FOOTER DATE SCRIPT
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = monthNames[mm - 1] + ' ' + dd + 'th ' + yyyy;
document.getElementById('today').innerHTML = today


// *****************************************************************************************
// CONTACT SECTION JAVASCRIPT
// 5 Arrays, one for each travel agent. They are then added to each corresponding li in the html document
const body = document.querySelector('body');

if (body.className === 'contact') {
    let agentJames = ['James Halley', (' 555-555-5555'), (' email: jhalley@aylwardair.ca')];
    let agentSarah = ['Sarah Mullaly', (' 555-555-5555'), (' email: smullaly@aylwardair.ca')];
    let agentTiffany = ['Tiffany Forward', (' 555-555-5555'), (' email: tforward@aylwardair.ca')];
    let agentErik = ['Erik Fisher', (' 555-555-5555'), (' email: efisher@aylwardair.ca')];
    let agentTony = ['Tony Aylward', (' 555-555-5555'), (' email: taylward@aylwardair.ca')];

    document.getElementById('agent1').innerHTML = agentJames;
    document.getElementById('agent2').innerHTML = agentSarah;
    document.getElementById('agent3').innerHTML = agentTiffany;
    document.getElementById('agent4').innerHTML = agentErik;
    document.getElementById('agent5').innerHTML = agentTony;
}


// *****************************************************************************************
// VACATION SECTION JAVASCRIPT
// Animation for Moving Plane GIF on Vacation Package Page
if (body.className === 'vacation') {
    var moveForward = true;
    var direction = 10;

    function planeMove () {
        var img = document.getElementById('plane');
        var imgLeft = parseInt(img.style.left);

    if (moveForward && (imgLeft > (window.innerWidth - img.width))) {
        moveForward = false;
    }

    if (!moveForward && (imgLeft <= 0)) {
        moveForward = true;
    }

    if (moveForward) {
        img.style.left = (imgLeft + direction) + 'px';
    } 

    else {
        img.style.transform = 'scaleX(-1)';
        img.style.left = (imgLeft - direction) + 'px';
    }
}
setInterval(planeMove, 150);

// Variables for vacation images
let vacInfo1 = document.getElementById('vacInfo1');
let vacInfo2 = document.getElementById('vacInfo2');
let vacInfo3 = document.getElementById('vacInfo3');
let vacInfo4 = document.getElementById('vacInfo4');
let vacImg1 = document.getElementById('vacImg1');
let vacImg2 = document.getElementById('vacImg2');
let vacImg3 = document.getElementById('vacImg3');
let vacImg4 = document.getElementById('vacImg4');

// Event listeners to change vacation image on mouse over
vacInfo1.addEventListener('mouseover', function() {
    vacImg1.style.backgroundImage = "url('imgs/dublin2.jfif')";
})
vacInfo1.addEventListener('mouseout', function() {
    vacImg1.style.backgroundImage = "url('imgs/dublin1.jfif')";
})

vacInfo2.addEventListener('mouseover', function() {
    vacImg2.style.backgroundImage = "url('imgs/rome2.jfif')";
})
vacInfo2.addEventListener('mouseout', function() {
    vacImg2.style.backgroundImage = "url('imgs/rome1.jfif')";
})

vacInfo3.addEventListener('mouseover', function() {
    vacImg3.style.backgroundImage = "url('imgs/paris2.jfif')";
})
vacInfo3.addEventListener('mouseout', function() {
    vacImg3.style.backgroundImage = "url('imgs/paris1.jfif')";
})

vacInfo4.addEventListener('mouseover', function() {
    vacImg4.style.backgroundImage = "url('imgs/ibiza2.jfif')";
})
vacInfo4.addEventListener('mouseout', function() {
    vacImg4.style.backgroundImage = "url('imgs/ibiza1.jfif')";
})

}

// *****************************************************************************************
// POSTAL CODE VALIDATION 
if (body.className === 'register') {
    let postalCode = document.getElementById('postal');
    let submit = document.getElementById('submit');


    submit.addEventListener('click', function(event) {
        if ((/[A-Z][0-9][A-Z][0-9][A-Z][0-9]/.test(postalCode.value.toUpperCase()) != true)){
        event.preventDefault();
        alert('Not a Valid Postal Code')
    }})}


    