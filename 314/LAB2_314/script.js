const messageParagraph = document.getElementById("message");
const changeMessageBtn = document.getElementById("changeMessageBtn");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const card = document.querySelector(".card");

const colors = ["#a8c8f0", "#f9d5a7", "#c8e6c9", "#f8bbd0", "#d1c4e9", "#b2ebf2"];
let colorIndex = 0;

changeMessageBtn.addEventListener("click", function () {
    messageParagraph.textContent = "Hello! Welcome to my webpage.";
});

changeBackgroundBtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    card.style.backgroundColor = colors[colorIndex];
});