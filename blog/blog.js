console.log("Welcome to Kids Read for Fun!");

// Add event listener to book titles
document.querySelectorAll('.book-review h2').forEach(title => {
    title.addEventListener('click', () => alert(`You clicked on "${title.textContent}"`));
});
