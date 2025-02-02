document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button"); // Select menu button
    const menu = document.querySelector(".menu"); // Select menu (ul)

    // Toggle menu visibility when menu button is clicked
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("hide");
    });

    // Handle window resize event to reset menu visibility
    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide"); // Ensure menu is visible on large screens
        } else {
            menu.classList.add("hide"); // Hide menu if screen is small
        }
    }

    // Run handleResize immediately when page loads
    handleResize();

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);
});
