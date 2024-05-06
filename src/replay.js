import randomnums from "./randomnums";

function replay() {
    answer = randomnums();
    document.getElementById("output").innerHTML = "";
    GameOver =false;
}