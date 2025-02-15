console.log("Welcome to Kids Read for Fun!");

// Book articles data
const articles = [
    {
        id: 1,
        title: "The 7 Habits of Highly Effective People",
        date: "August 15, 1989",
        description: "This timeless classic teaches key principles of personal and professional effectiveness. Covey’s 7 habits focus on personal growth, leadership, and developing a proactive mindset. A must-read for anyone looking to improve time management, decision-making, and interpersonal relationships.",
        imgSrc: "The 7 Habits of Highly Effective People.jpg",
        imgAlt: "The 7 Habits of Highly Effective People",
        ages: "10-14",
        genre: "Personal Development, Self-Help",
        stars: "★★★★★"
    },
    {
        id: 2,
        title: "Atomic Habits",
        date: "October 16, 2018",
        description: "In Atomic Habits, James Clear explores how small, incremental changes can lead to remarkable results over time. Through practical strategies backed by science, the book teaches how to build good habits, break bad ones, and master the tiny behaviors that lead to lasting success.",
        imgSrc: "Atomic Habits.jpg",
        imgAlt: "Atomic Habits",
        ages: "10-16",
        genre: "Personal Development, Self-Help",
        stars: "★★★★☆"
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        date: "April 1, 1997",
        description: "Rich Dad Poor Dad by Robert Kiyosaki contrasts the financial philosophies of his two 'dads'—his biological father and the father of his best friend. The book challenges conventional financial thinking and provides insights into wealth-building, investing, and financial independence.",
        imgSrc: "richdadpoordad.jpg",
        imgAlt: "Rich Dad Poor Dad",
        ages: "10-16",
        genre: "Finance, Self-Help",
        stars: "★★★★★"
    }
];

// Function to generate book reviews dynamically
function generateArticles() {
    const articleContainer = document.querySelector(".content-container");

    articles.forEach(article => {
        const articleElement = document.createElement("section");
        articleElement.classList.add("book-review");

        articleElement.innerHTML = `
            <div class="book-details">
                <p class="date">${article.date}</p>
                <p class="age">${article.ages}</p>
                <p class="genre">${article.genre}</p>
                <p class="rating">${article.stars}</p>
            </div>
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description}</p>
            </div>
        `;

        articleContainer.appendChild(articleElement);
    });

    // Add event listener to book titles
    document.querySelectorAll('.book-review h2').forEach(title => {
        title.addEventListener('click', () => alert(`You clicked on "${title.textContent}"`));
    });
}

// Run function on page load
document.addEventListener("DOMContentLoaded", generateArticles);
