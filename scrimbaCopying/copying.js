// 1. Grab the save-el paragrah and store it in a variable called saveEl


let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log(count)
    count = 0
    countEl.innerText = count
}


