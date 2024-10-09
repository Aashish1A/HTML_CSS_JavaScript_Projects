const buttons = document.querySelector("button");
const openClass = document.querySelector(".pop-up");
const closeIcon = document.querySelector(".close-icon");

buttons.addEventListener("click", (e) => {
    openClass.classList.add("open");
})

closeIcon.addEventListener("click", (e) => {
    openClass.classList.remove("open");
})