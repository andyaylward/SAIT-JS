var generate = $('#generate');
var colorAmount = $('#amount');
var c1 = $('#c1');
var c2 = $('#c2');
var c3 = $('#c3');
var c4 = $('#c4');

var hueApply = $('#hueApply');
var hue = $('#hue')

var lumApply = $('#lumApply');
var lum = $('#lum')

// COLOR GEN SECTION

generate.on('click', function () {
     console.log(colorAmount.val())
     console.log(hue.val())
    if (colorAmount.val() == 1 && hue.val() === 'random') {
        c1.css({'display': 'block', 'background-color': randomColor()})
        c2.css({'display': 'none', 'background-color': randomColor()})
        c3.css({'display': 'none', 'background-color': randomColor()})
        c4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 2 && hue.val() === 'random') {
        c1.css({'display': 'block', 'background-color': randomColor()})
        c2.css({'display': 'block', 'background-color': randomColor()})
        c3.css({'display': 'none', 'background-color': randomColor()})
        c4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 3 && hue.val() === 'random') {
        c1.css({'display': 'block', 'background-color': randomColor()})
        c2.css({'display': 'block', 'background-color': randomColor()})
        c3.css({'display': 'block', 'background-color': randomColor()})
        c4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 4 && hue.val() === 'random') {
        c1.css({'display': 'block', 'background-color': randomColor()})
        c2.css({'display': 'block', 'background-color': randomColor()})
        c3.css({'display': 'block', 'background-color': randomColor()})
        c4.css({'display': 'block', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 1 && hue.val() !== 'random') {
        c1.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c2.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        c3.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        c4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 2) {
        c1.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c3.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        c4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 3) {
        c1.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c3.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 4) {
        c1.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c3.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        c4.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
    }
})

// LUMINOSITY SECTION

lumApply.on('click', function () {
    console.log(lum.val());
    c1.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: lum.val()
    })})
    c2.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: lum.val()
    })})
    c3.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: lum.val()
    })})
    c4.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: lum.val()
    })})
})