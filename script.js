/*********************************
 * GLOBAL STATE
 *********************************/
let foods = [];
let isTelugu = false;

const colors = [
  "bg-green",
  "bg-yellow",
  "bg-orange",
  "bg-pink",
  "bg-blue"
];

/*********************************
 * DOM ELEMENTS
 *********************************/
const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const teluguToggle = document.getElementById("teluguToggle");

/*********************************
 * LOAD RECIPES FROM FIREBASE
 *********************************/
function loadRecipesFromFirebase() {
  db.collection("recipes")
    .get()
    .then(snapshot => {
      foods = snapshot.docs.map(doc => doc.data());
      filterRecipes(); // initial render
    })
    .catch(error => {
      console.error("❌ Error loading recipes from Firebase:", error);
    });
}

/*********************************
 * DISPLAY RECIPES
 *********************************/
function displayRecipes(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  list.forEach(item => {
    const card = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    card.className = `card ${color}`;

    card.innerHTML = `
      <div class="card-content">
        <h3>${isTelugu ? item.telugu : item.name}</h3>
        <p>${item.category}</p>
      </div>

      <div class="recipe-details">
        <h4>🧺 Ingredients</h4>
        <ul>${item.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

        <h4>👩‍🍳 Method</h4>
        <ol>${item.method.map(m => `<li>${m}</li>`).join("")}</ol>

        <h4>🌿 Benefits</h4>
        <ul>${item.benefits.map(b => `<li>${b}</li>`).join("")}</ul>

        <h4>⚠️ Who should avoid</h4>
        <ul>${item.avoidFor.map(a => `<li>${a}</li>`).join("")}</ul>
      </div>
    `;

    /*********************************
     * OPEN / CLOSE LOGIC
     *********************************/
    card.onclick = () => {
      const details = card.querySelector(".recipe-details");
      const isOpen = details.style.display === "block";

      // close all recipes
      document.querySelectorAll(".recipe-details").forEach(d => {
        d.style.display = "none";
      });

      // toggle current
      if (!isOpen) {
        details.style.display = "block";
      }
    };

    container.appendChild(card);
  });
}

/*********************************
 * FILTER LOGIC
 *********************************/
function filterRecipes() {
  const searchText = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  let filteredRecipes;

  if (searchText === "") {
    // HOME SCREEN → ONLY FAMOUS
    filteredRecipes = foods.filter(r => r.isFamous === true);
  } else {
    // SEARCH → ALL MATCHING
    filteredRecipes = foods.filter(r => {
      const matchesText =
        r.name.toLowerCase().includes(searchText) ||
        r.telugu.includes(searchText);

      const matchesCategory =
        category === "all" || r.category === category;

      return matchesText && matchesCategory;
    });
  }

  displayRecipes(filteredRecipes);
}

/*********************************
 * EVENT LISTENERS
 *********************************/
searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

teluguToggle.addEventListener("click", () => {
  isTelugu = !isTelugu;
  document.body.classList.toggle("telugu");
  filterRecipes();
});

/*********************************
 * INITIAL LOAD
 *********************************/
loadRecipesFromFirebase();
