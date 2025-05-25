
let count = 0;

let Busses = document.getElementById("count-el")
let passedBusses = document.getElementById("passed-busses")
let busColor = "Red";

function counter(){
    count = count + 1;
    Busses.innerText = count;

    passedBusses.innerText = "Passed Busses: " + count +
 " and the last bus color was " + busColor;

    
}

passedBusses.innerText = "Passed Busses: " + count +
 " and the last bus color was " + busColor;