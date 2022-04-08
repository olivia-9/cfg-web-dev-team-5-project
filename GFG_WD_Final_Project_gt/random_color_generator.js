
const originalButton = document.getElementById("original-button");

const mysteryButton = document.getElementById("mystery-button");


// let randomColor = "rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ',' ')";

// rgb(255,255,255);

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function colorChange(event) {
    const randomColor = 'rgb(' + 
    randomNumber(255) + ',' + 
    randomNumber(255) + ',' + 
    randomNumber(255) + ')';
    event.target.style.backgroundColor = randomColor;

}

originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;