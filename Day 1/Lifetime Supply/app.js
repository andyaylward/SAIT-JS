// var ageCurrent = 26;
// var ageMax = 100;
// var snackPerDay = 3;

// var yearsLeft = ageMax - ageCurrent;
// var daysLeft = yearsLeft * 365;
// var snackLifetimeSupply = daysLeft * snackPerDay;

// document.write('You will need ' + snackLifetimeSupply + ' reese cups to last you until the ripe old age of ' + ageMax);

var ageCurrent = 26;

function calculateSupply (yearsLeft, amountPerDay) {
    var daysLeft = yearsLeft * 365;
    var supply = daysLeft * amountPerDay;
    console.log("You will need " + supply + " to last you until the ripe oldage of " + (ageCurrent + yearsLeft))
}

calculateSupply (50, 2);
calculateSupply (60, 4);
calculateSupply (1, 1);