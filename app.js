console.log("Hello World");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    h3.innerText = randomcolor();
    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor();
});

function randomcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}