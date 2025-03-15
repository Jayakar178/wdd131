document.addEventListener("DOMContentLoaded", function() {
    console.log("Recipe Book Loaded!");

    const recipes = [
        {
            name: "Apple Crisp",
            category: "Dessert",
            rating: 4,
            image: "images/apple-crisp.jpg",
            description: "This apple crisp recipe is a simple yet delicious fall dessert that’s great served warm with vanilla ice cream."
        },
        {
            name: "Chocolate Cake",
            category: "Dessert",
            rating: 5,
            image: "images/chocolate-cake.jpg",
            description: "A rich and moist chocolate cake topped with a silky chocolate ganache."
        },
        {
            name: "Grilled Salmon",
            category: "Dinner",
            rating: 4,
            image: "images/grilled-salmon.jpg",
            description: "Perfectly grilled salmon fillets with a lemon butter glaze."
        }
    ];

    const recipeContainer = document.getElementById("recipe-container");

    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = ""; // Clear existing recipes
        recipesToDisplay.forEach(recipe => {
            const recipeElement = document.createElement("section");
            recipeElement.classList.add("recipe");

            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-info">
                    <span class="tag">${recipe.category}</span>
                    <h2>${recipe.name}</h2>
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
                    </span>
                    <p class="description">${recipe.description}</p>
                </div>
            `;
            recipeContainer.appendChild(recipeElement);
        });
    }

    displayRecipes(recipes);

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });
});



















