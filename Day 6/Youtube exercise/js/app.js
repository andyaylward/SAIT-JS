vidList = document.querySelectorAll('a');

for (i=0; i<vidList.length; i++) {
    var link = vidList[i].getAttribute('href');
    var thumbnail = youtube.generateThumbnailUrl(link);
    var img = document.createElement('img');
    img.setAttribute('src', thumbnail);
    vidList[i].appendChild(img);
}