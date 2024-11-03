const menu = document.querySelector(".mobile-menu");
const btn = document.querySelector(".mobile-menu-button");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});