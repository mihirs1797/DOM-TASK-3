document.getElementById("generator").addEventListener('click', function(){
    var result = generateNum(10000000,99999999);
    document.getElementById("display").innerText = result;
});

function generateNum (min, max) {
    var randNumber = Math.floor(Math.random()*(max - min + 1)) + min;
    if (randNumber == max) {
      randNumber += generateNum(min, max);
    }
    return randNumber;
}



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

document.getElementById("sub").addEventListener('click',function(){
    var inp = document.getElementById("birthday").value;
    console.log(inp);
    console.log(today);
    var diff = Date.parse(today) - Date.parse(inp);
    console.log(diff)
    printResults(diff); 
});

function printResults(diff){
    var milliseconds = diff;
    var seconds = ((milliseconds/1000)/60);
    var minutes = ((milliseconds/(1000*60))%60);
    var hours = Math.abs(diff)/36e5;
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    var weeks = parseInt(milliseconds / (1000*60*60*24*7));
    var months = parseInt(weeks/4.35);
    var years = parseInt(months/12);
    var message ="Age in years : "+years+"<br>Age in months : "+months+"<br>Age in weeks : "+weeks+ "<br>Age in days : "+days+
    "<br>Age in Hours : "+hours+ "<br> Age in Seconds : "+seconds+ 
    "<br> Age in Milliseconds : "+milliseconds;
    document.getElementById('displayDOB').innerHTML = message;
}