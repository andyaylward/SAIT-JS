var header = $('header') 

var main = $('main')

var footer = $('footer')

console.log(header);
console.log(main);
console.log(footer);

// Changes h2 header to be purple
var h2 = $('main h2');
h2.css({'color': 'purple'})

// This changes the main paragraph from lorem ipsum to a new sentence
var mainContent = $('#lorem');
mainContent.html('This is the changed content instead of lorem ipsum!');

// This modifies the a tag to go from saying 'Google!' with a google link, to 'Yahoo!' with a yahoo link. It also adds a blank target so yahoo is opened in a new page 
var mainLink = $('main a');
mainLink.attr('href', 'http://yahoo.ca');
mainLink.html('Yahoo!');
mainLink.attr('target', '_blank');


// By using .each , we can loop through elements. This is easier then using for loops
var footerLinks = $('footer li');

footerLinks.each(function() {
    var link = $(this);
    link.text(link.text()+' click here');
})

// This is a function that says, when the page is fully loaded, run this:
$(document).ready(function() {
    // whatever would run
})

// This can also be done shorthand like so:
$(function() {
    // whatever would run
})

function button1() {
    $('#clickStatus').html('Thanks for clicking!');
}
$('button').on('click', button1)

// Using event functions, this doesnt quite work though
$('main').on('keypress', function(event){
    console.log(event);
    console.log(event.which);
    console.log(event.target);
})

// Preventing event default example
$('form').on('submit', function(event){
    event.preventDefault();
    console.log('Not submitting the form!');
})

$('#exampleMessage').hide();
$('#exampleMessage').fadeIn(2000);
$('#exampleMessage').fadeIn(2000, function() {
    $(this).addClass('alert');
});

$('#square')