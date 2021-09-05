const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const btn = document.querySelector(".btn-js-btn");

function btnHandler() {
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];
    const thirdColor = colors[Math.floor(Math.random() * colors.length)];


    if (firstColor === secondColor || firstColor === thirdColor || secondColor === thirdColor) {
        btnHandler();
    } else {
        document.body.style.background = `linear-gradient(to right, ${firstColor},${secondColor},${thirdColor})`;
    }
}
btnHandler();
btn.addEventListener("click", btnHandler);