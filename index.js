let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    if (count > 100) {
        alert("thats lots of doggos")
    }
    countEl.textContent = 0
    count = 0
}
