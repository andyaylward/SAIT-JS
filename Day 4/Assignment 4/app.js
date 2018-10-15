var quotes = ['"The universe is random. Not inevitable. Its simple chaos" -Walter White', '"Just because you shot Jesse James, dont make you Jesse James" -Mike Ehrmantraut', '"Theres no honor among thieves... except for us of course." -Saul Goodman', ' "Is that all you got?" And for some reason I thought to myself, "Yeah, man, I can do better" -Jesse Pinkman', '"I want my kids back. I want my life back. Please tell me…how much is enough? How big does this pile have to be?" -Skyler White']

var q = document.getElementById('quote');
var currentQuote = 0;
q.innerHTML = quotes[currentQuote]

function nextQuote() {
    currentQuote++
    if (currentQuote === 5) {
        currentQuote = 0;
    }
    q.innerHTML = quotes[currentQuote]
}

function forwardQ () {
    currentQuote = currentQuote + 1;
    if (currentQuote === 5) {
        currentQuote = 0;
    }
    q.innerHTML = quotes[currentQuote];
}

function backQ () {
    currentQuote = currentQuote - 1;
    if (currentQuote === -1) {
        currentQuote = 4;
    }
    q.innerHTML = quotes[currentQuote];
}

setInterval(nextQuote, 30000)