(function () {
    var hero = document.getElementById('hero');
    var navButton = document.getElementById('navButton');
    navButton.addEventListener('click', function() {
        hero.className = 'hero-secondary'
    })
})();

