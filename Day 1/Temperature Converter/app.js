// var celcius = 15;
// var farenheit = 77;
// var toFarenheit = celcius * (9 / 5) + 32;
// var toCelcius = (farenheit - 32) * 5/9;

// document.write(celcius + ' degrees celcius is equivalent to ' + toFarenheit + ' degrees farenheit.');
// document.write(farenheit + ' degrees farenheit is equivalent to ' + toCelcius + ' degrees celcius.');

function celciusToFahrenheit(celcius){
    var fahrenheit = celcius * (9/5) + 32;
    console.log(celcius + "°C is " + fahrenheit + "°F.")
}

function fahrenheitToCelcius(fahrenheit){
    var celcius = (fahrenheit - 32) * (5/9);
    console.log(fahrenheit + '°F is '+ celcius + '°C')
}

celciusToFahrenheit(15);
fahrenheitToCelcius(77);