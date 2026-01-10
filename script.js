// 🔥 Firebase config (your project)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ammama-recipes.firebaseapp.com",
  projectId: "ammama-recipes",
  storageBucket: "ammama-recipes.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// UI Elements
const recipeList = document.getElementById("recipeList");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

let allRecipes = [];

// Load recipes from Firestore
db.collection("recipes").get().then(snapshot => {
  allRecipes = snapshot.docs.map(doc => doc.data());
  displayRecipes(allRecipes.filter(r => r.isFamous === true));
});

// Display recipes
function displayRecipes(recipes) {
  recipeList.innerHTML = "";

  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-card";

    div.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><b>Category:</b> ${recipe.category}</p>
      <ul>${(recipe.ingredients || []).map(i => `<li>${i}</li>`).join("")}</ul>
    `;

    recipeList.appendChild(div);
  });
}

// Search
searchInput.addEventListener("input", () => {
  filterRecipes();
});

categorySelect.addEventListener("change", () => {
  filterRecipes();
});

function filterRecipes() {
  const text = searchInput.value.toLowerCase();
  const cat = categorySelect.value;

  const filtered = allRecipes.filter(r => {
    const matchText = r.name.toLowerCase().includes(text);
    const matchCat = cat === "All" || r.category === cat;
    return matchText && matchCat;
  });

  displayRecipes(filtered);
}
