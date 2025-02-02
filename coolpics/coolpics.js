document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button"); // Select menu button
    const menu = document.querySelector(".menu"); // Select menu (ul)

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("hide"); // Toggle menu visibility
    });
});
