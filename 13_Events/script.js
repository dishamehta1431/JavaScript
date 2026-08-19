// Click Event

const clickbtn = document.getElementById("btn");

clickbtn.addEventListener("click", () => {
    alert("Button clicked!!");
});


// Double Click Event

const doubleclick = document.getElementById("dblClick");

doubleclick.addEventListener("dblclick", () => {
    alert("Double clicked!!");
});


// Submit Event

const submitBtn = document.getElementById("myForm");

submitBtn.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    alert(`Hello ${name}`);
});


// Mouse Over

const mouseover = document.getElementById("mouseOver");

mouseover.addEventListener("mouseover", () => {
    mouseover.style.color = "blue";
});


// Mouse Out

const mouseout = document.getElementById("mouseOut");

mouseout.addEventListener("mouseout", () => {
    mouseout.style.color = "red";
});


// Mouse Enter

const mouseenter = document.getElementById("mouseEnter");

mouseenter.addEventListener("mouseenter", () => {
    mouseenter.style.color = "green";
});


// Mouse Leave

const mouseleave = document.getElementById("mouseLeave");

mouseleave.addEventListener("mouseleave", () => {
    mouseleave.style.color = "orange";
});


// Mouse Down

const mousedown = document.getElementById("mouseDown");

mousedown.addEventListener("mousedown", () => {
    mousedown.style.color = "purple";
});


// Mouse Up

const mouseup = document.getElementById("mouseUp");

mouseup.addEventListener("mouseup", () => {
    mouseup.style.color = "brown";
});


// Mouse Move

const mousemove = document.getElementById("mouseMove");

mousemove.addEventListener("mousemove", () => {
    mousemove.style.color = "pink";
});


// Key Down

const keydown = document.getElementById("keyDown");

keydown.addEventListener("keydown", () => {
    keydown.style.color = "red";
});


// Key Up

const keyup = document.getElementById("keyUp");

keyup.addEventListener("keyup", () => {
    keyup.style.color = "green";
});


// Key Press

const keypress = document.getElementById("keyPress");

keypress.addEventListener("keypress", () => {
    keypress.style.color = "blue";
});