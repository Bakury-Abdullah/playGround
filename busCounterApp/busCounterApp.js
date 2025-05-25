
let count = 0;

let Busses = document.getElementById("count-el")

function counter(){
    count = count + 1;
    Busses.innerText = count;
    console.log(count);
}

