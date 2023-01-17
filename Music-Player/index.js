var audios = ["01.mp3", "02.mp3", "03.mp3", "04.mp3", "05.mp3", "06.mp3"];
var color = [["#a8c0ff", "#3f2b96"], ["#3E5151", "#DECBA4"], ["#fffbd5", "#b20a2c"], ["#D3CCE3", "#E9E4F0"], ["#3C3B3F", "#605C3C"], ["#74ebd5", "#ACB6E5"]];
var audio = document.getElementById("audio");
var img = document.getElementById("img");
var heading = document.getElementById("heading");
function play() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}
let index = 0;
function nextSong() {
    index = (index + 1) % audios.length;
    audio.src = "songs/" + audios[index];
    audio.load();
    audio.play();
    document.body.style.background = "linear-gradient(to right," + color[index][0] + "," + color[index][1] + " )";
    switch (index) {
        case 0:
            heading.innerText = "StarBoy";
            img.src = "img/01.jpg";
            break;
        case 1:
            heading.innerText = "Tum Ho";
            img.src = "img/02.jpeg";
            break;
        case 2:
            heading.innerText = "Kabira";
            img.src = "img/03.jpg";
            break;
        case 3:
            heading.innerText = "Kun Faya Kun";
            img.src = "img/04.jpg";
            break;
        case 4:
            heading.innerText = "Afreen Afreen";
            img.src = "img/05.jpg";
            break;
        case 5:
            heading.innerText = "Tujhe Kitna Chahne Lage";
            img.src = "img/06.jpg";
            break;
        default:
            break;
    }


}