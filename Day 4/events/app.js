var div = document.createElement('div');
div.style.backgroundColor = 'blue';
div.style.width = '100px';
div.style.height = '100px';

function divAppear() {
    document.querySelector('body').append(div);
}

var divRed = document.getElementById('btn2');
divRed.addEventListener('mouseover', divAppear)


// Below is some code to prevent an HTML element from running its default event
var link = document.getElementById('mylink');
link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Error! This link is broken!');
})

// The code below uses the currentTarget to reference the element the eventListener is attached too. in this case we changed the inner HTML of the button
var button = document.getElementById('btn2');
button.addEventListener('click', function(event){
    btn = event.currentTarget;

    btn.innerHTML = 'new text';
})