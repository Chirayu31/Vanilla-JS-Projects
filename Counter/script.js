let counter = document.getElementById("count");
function Dec() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function Inc() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function Reset() {
    counter.innerHTML = 0;
}
