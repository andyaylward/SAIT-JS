// var radius = 50;
// var circumference = 2 * Math.PI * 50;
// var area = Math.PI * (radius * radius);
// document.write('The circumference is ' + circumference);
// document.write('The area is ' + area);

function calcCircumference (radius) {
    var circumference = 2 * Math.PI * radius;
    console.log('The circumference is ' + circumference)
}

function calcArea (radius) {
    var area = Math.PI * (radius * radius);
    console.log('the area is ' + area)
}

calcCircumference(50);
calcArea(50);