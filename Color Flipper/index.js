function changeColor() {
    var one = Math.floor(Math.random() * 255);
    var two = Math.floor(Math.random() * 255);
    var three = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `RGB(${one},${two},${three})`;
    document.getElementById("color").innerHTML = document.body.style.backgroundColor;
}