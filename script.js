var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;    

slider.oninput = function() {
    output.innerHTML = slider.value;
}

var guessbtn = document.getElementById("nobutton");
var guess = document.getElementById("guessednum");
let x = (Math.random()*10000000000).toFixed();
guess.innerHTML = x;
guessbtn.onclick = function() {
    let x = (Math.random()*10000000000).toFixed();
    guess.innerHTML = x;
}