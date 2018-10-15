var submitButton = document.getElementById('submit');

var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var underAge = document.getElementById('errorUnderAge');

submitButton.addEventListener('click', function(event) {
    errorName.style.display = 'none';
    errorAge.style.display = 'none';
    errorUnderAge.style.display= 'none';

    var name = document.form1.txtName.value;
    var age = document.form1.txtAge.value;

    if (!name) {
        event.preventDefault();
        errorName.style.display = 'block';
    }

    if (!age) {
        event.preventDefault();
        errorAge.style.display = 'block';
    }

    if (parseInt(age) < 18) {
        event.preventDefault();
        errorUnderAge.style.display = 'block';
    }
});

