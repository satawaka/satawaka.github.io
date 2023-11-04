// script.js
const panel = document.querySelector(".panel");

document.addEventListener("mousemove", (e) => {
    // Update the panel's position to follow the cursor
    const x = e.clientX;
    const y = e.clientY;

    panel.style.left = x + "px";
    panel.style.top = y + "px";
});
