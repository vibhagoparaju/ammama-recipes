// =======================
// 🔥 FIREBASE
// =======================
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

// =======================
// 🌈 COLOR BACKGROUNDS
// =======================
const colorClasses = [
  "bg-green","bg-yellow","bg-orange","bg-pink",
  "bg-blue","bg-purple","bg-red","bg-teal"
];

// =======================
// 📦 DOM
// =======================
const recipesDiv = document.getElementById("recipes");
const searchInput = document.getElementById("search");

let allRecipes = [];

// =======================
// 🔥 LOAD FROM FIREBASE
// =======================
db.collection("recipes").get().then(snapshot => {
  snapshot.forEach(doc => {
    allRecipes.push(doc.data());
  });
  render(allRecipes);
});

// =======================
// 🎨 RENDER BEAUTIFUL CARDS
// =======================
function render(list){
  recipesDiv.innerHTML = "";

  list.forEach((r, i) => {
    const bg = colorClasses[i % colorClasses.length];

    const div = document.createElement("div");
    div.className = `recipe-card ${bg}`;

    div.innerHTML = `
      <h2>${r.name}</h2>
      <p class="cat">${r.category}</p>

      <div class="section">
        <h4>🧺 Ingredients</h4>
        <ul>${(r.ingredients||[]).map(i=>`<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="section">
        <h4>🌿 Benefits</h4>
        <p>${r.benefits || ""}</p>
      </div>

      <div class="section">
        <h4>⚠️ Avoid For</h4>
        <p>${r.avoidFor || ""}</p>
      </div>
    `;

    recipesDiv.appendChild(div);
  });
}

// =======================
// 🔍 SEARCH
// =======================
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  render(allRecipes.filter(r => r.name.toLowerCase().includes(q)));
});
