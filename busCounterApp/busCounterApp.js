
let count = 0;

let Busses = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saved = document.getElementById("saved-count")

function counter(){
    count += 1;
    Busses.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saved.textContent += countStr;
    count = 0;
    Busses.innerText = count;
}