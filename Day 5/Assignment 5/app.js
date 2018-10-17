// Question 1
var submit1 = document.getElementById('submit1');
var true1 = document.getElementById('true1');
var false1 = document.getElementById('false1');

var score = 0;
var scoreResult = document.getElementById('scoreResult');

submit1.addEventListener('click', function(event){
    if (true1.checked) {
        score = score + 20;
        document.getElementById('q1').style.display = 'none';
        document.getElementById('q2').style.display = 'block';
        console.log(score);
    }
    if (false1.checked) {
        document.getElementById('q1').style.display = 'none';
        document.getElementById('q2').style.display = 'block';
    }
})

// Question 2
var submit2 = document.getElementById('submit2');
var answer2 = document.getElementById('answer2');

submit2.addEventListener('click', function(event){
    
    if (answer2.value === 'saskatchewan' || answer2.value === 'Saskatchewan') {
        score = score + 20;
        document.getElementById('q2').style.display = 'none';
        document.getElementById('q3').style.display = 'block';
        console.log(score);
    }

    if (answer2.value !== '') {
        document.getElementById('q2').style.display = 'none';
        document.getElementById('q3').style.display = 'block';

    }
})

// Question 3
var submit3 = document.getElementById('submit3');

var toronto = document.getElementById('toronto');
var sask = document.getElementById('sask');
var stjohns = document.getElementById('stjohns');
var ottawa = document.getElementById('ottawa');
var victoria = document.getElementById('victoria');
var calgary = document.getElementById('calgary');

submit3.addEventListener('click', function(event){
    if (ottawa.checked && calgary.checked && sask.checked) {
        score = score + 20;
        console.log(score);
        document.getElementById('q3').style.display = 'none';
        document.getElementById('q4').style.display = 'block'; 
    }
    if (!ottawa.checked && !calgary.checked && !sask.checked && !stjohns.checked && !victoria.checked && !toronto.checked) {
        document.getElementById('q3').style.display = 'block';
        document.getElementById('q4').style.display = 'none'; 
    }
    else {
        document.getElementById('q3').style.display = 'none';
        document.getElementById('q4').style.display = 'block';  
    }
})

// Question 4
var submit4 = document.getElementById('submit4');
var true2 = document.getElementById('true2');
var false2 = document.getElementById('false2');

submit4.addEventListener('click', function(event){
    if (false2.checked) {
        score = score + 20;
        console.log(score);
        document.getElementById('q4').style.display = 'none';
        document.getElementById('q5').style.display = 'block';
    }
    if (true2.checked) {
        document.getElementById('q4').style.display = 'none';
        document.getElementById('q5').style.display = 'block';
    }
})

// Question 5
var submit5 = document.getElementById('submit5');

var correctProv = document.getElementById('provinces');
var correctTer = document.getElementById('territories');

submit5.addEventListener('click', function(event){
    if (correctProv.value == 10 && correctTer.value == 3) {
        score = score + 20;
        scoreResult.innerHTML = score;
        console.log(score);
        document.getElementById('q5').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }
    else if (correctProv.value !== 10 && correctTer == 3) {
        score = score + 10;
        scoreResult.innerHTML = score;
        console.log(score);
        document.getElementById('q5').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }
    else if (correctProv.value == 10 && correctTer !== 3) {
        score = score + 10;
        console.log(score);
        scoreResult.innerHTML = score;
        document.getElementById('q5').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }
    else if (correctProv.value !== 10 && correctTer !== 3) {
        scoreResult.innerHTML = score;
        document.getElementById('q5').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }
})

// Results 
var scoreResult = document.getElementById('scoreResult');

scoreResult.innerHTML = score;