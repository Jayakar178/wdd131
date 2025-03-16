document.addEventListener("DOMContentLoaded", function () {
    console.log("Recipe Book Loaded!");

    const recipes = [
        {
            name: "Apple Crisp",
            category: "Dessert",
            rating: 4,
            image: "images/apple-crisp.jpg",
            description: "This apple crisp recipe is a simple yet delicious fall dessert that’s great served warm with vanilla ice cream.",
            tags: ["Dessert", "Fruit"]
        },
        {
            name: "Chocolate Cake",
            category: "Dessert",
            rating: 5,
            image: "images/chocolate-cake.jpg",
            description: "A rich and moist chocolate cake topped with a silky chocolate ganache.",
            tags: ["Dessert", "Chocolate"]
        },
        {
            name: "Grilled Salmon",
            category: "Dinner",
            rating: 4,
            image: "images/grilled-salmon.jpg",
            description: "Perfectly grilled salmon fillets with a lemon butter glaze.",
            tags: ["Dinner", "Seafood"]
        }
    ];

    const recipeContainer = document.getElementById("recipe-container");

    // Function to generate a random number
    function random(num) {
        return Math.floor(Math.random() * num);
    }

    // Function to get a random recipe
    function getRandomRecipe() {
        return recipes[random(recipes.length)];
    }

    // Function to generate the tag HTML
    function tagsTemplate(tags) {
        return tags.map(tag => `<li>${tag}</li>`).join('');
    }

    // Function to generate the rating stars
    function ratingTemplate(rating) {
        return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            ${"⭐".repeat(rating)}${"☆".repeat(5 - rating)}
        </span>`;
    }

    // Function to generate the recipe template
    function recipeTemplate(recipe) {
        return `<section class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </section>`;
    }

    // Function to render recipes
    function renderRecipes(recipeList) {
        recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
    }

    // Function to initialize a random recipe on load
    function init() {
        const randomRecipe = getRandomRecipe();
        renderRecipes([randomRecipe]);
    }

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        renderRecipes(filteredRecipes);
    });

    // Run init function on page load
    init();
});
