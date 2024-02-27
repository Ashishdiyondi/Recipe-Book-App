const API_KEY = "cdaf25439e2543119f7300d7d199fa51";
const recipeListEl = document.querySelector(".recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    // create list
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    // image
    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";
    //recipe
    const recipeNameEl = document.createElement("h4");
    recipeNameEl.innerText = recipe.title;
    //Ingredients
    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = ` <strong>Ingredients:</strong>
     ${recipe.extendedIngredients
       .map((ingredient) => ingredient.original)
       .join(", ")}`;
    //button
    const viewRecipebtnEl = document.createElement("a");
    viewRecipebtnEl.href = recipe.sourceUrl;
    viewRecipebtnEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeNameEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(viewRecipebtnEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
  console.log(recipes);
}

init();
