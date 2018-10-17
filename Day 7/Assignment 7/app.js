var submit = document.getElementById('submit');
var display = document.getElementById('display');
var artist = document.getElementById('artist');
var song = document.getElementById('song');

submit.addEventListener('click', function(event){
        event.preventDefault();
        var url = ('https://api.lyrics.ovh/v1/' + (artist.value) + '/' + (song.value));
        console.log(url);

fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
.then(function(response) {
    return response.json();
})
.then(function(data) {
        if (data.error == 'No lyrics found'){
            display.innerHTML = 'Sorry, no lyrics were found using that artist/song combination'
        }
        else {
            display.innerHTML = data.lyrics
            display.style.padding = '20px'
            display.style.lineHeight = '175%'
        }
    })
})



