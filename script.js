/***********************
 🔥 FIREBASE SETUP
***********************/
const firebaseConfig = {
  apiKey: "AIzaSyCjzmitxSTwzeWflhH9jJFSlY6CkPQhBq4",
  authDomain: "ammama-recipes.firebaseapp.com",
  projectId: "ammama-recipes",
  storageBucket: "ammama-recipes.firebasestorage.app",
  messagingSenderId: "840447870048",
  appId: "1:840447870048:web:7e36fe24e82a90a3daaf05"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/***********************
 🎨 UI COLOR CLASSES
***********************/
const colorClasses = [
  "bg-green",
  "bg-yellow",
  "bg-orange",
  "bg-pink",
  "bg-blue",
  "bg-purple",
  "bg-red",
  "bg-teal"
];

/***********************
 📦 DATA
***********************/
let foods = [];
let showTelugu = false;

/***********************
 🔥 LOAD FROM FIREBASE
***********************/
db.collection("recipes").get().then(snapshot => {
  foods = snapshot.docs.map(doc => doc.data());
  console.log("🔥 Loaded from Firebase:", foods.length);
  renderRecipes();
});

/***********************
 🔎 FILTER & SEARCH
***********************/
function getFilteredFoods() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categorySelect").value;

  return foods.filter(food => {
    const matchSearch = food.name.toLowerCase().includes(search);
    const matchCategory = category === "All" || food.category === category;

    // Show only famous when no search
    if (!search) return food.isFamous && matchCategory;
    return matchSearch && matchCategory;
  });
}

/***********************
 🧾 RENDER RECIPES
***********************/
function renderRecipes() {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  const list = getFilteredFoods();

  list.forEach((food, index) => {
    const color = colorClasses[index % colorClasses.length];

    const card = document.createElement("div");
    card.className = `recipe-card ${color}`;

    card.innerHTML = `
      <h3>${showTelugu ? food.nameTelugu || food.name : food.name}</h3>
      <p class="category">${food.category}</p>

      <h4>Ingredients</h4>
      <ul>${(food.ingredients || []).map(i => `<li>${i}</li>`).join("")}</ul>

      <h4>Method</h4>
      <ol>${(food.method || []).map(s => `<li>${s}</li>`).join("")}</ol>
    `;

    container.appendChild(card);
  });
}

/***********************
 🎛 EVENTS
***********************/
document.getElementById("searchInput").addEventListener("input", renderRecipes);
document.getElementById("categorySelect").addEventListener("change", renderRecipes);

document.querySelector(".telugu-btn").addEventListener("click", () => {
  showTelugu = !showTelugu;
  renderRecipes();
});
