var vidList = $('a');

vidList.each(function() {
    var vid = $(this);

    var link = vid.attr('href');
    var thumbnail = youtube.generateThumbnailUrl(link);
    var newImg = $('<img>').attr('src', thumbnail);
    vid.append(newImg);
})


