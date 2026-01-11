const firebaseConfig = {
  apiKey: "AIzaSyCjzmitxSTwzeWflhH9jJFSlY6CkPQhBq4",
  authDomain: "ammama-recipes.firebaseapp.com",
  projectId: "ammama-recipes.firebaseapp.com",
  projectId: "ammama-recipes",
  storageBucket: "ammama-recipes.firebasestorage.app",
  messagingSenderId: "840447870048",
  appId: "1:840447870048:web:7e36fe24e82a90a3daaf05"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const recipesDiv = document.getElementById("recipes");
const searchInput = document.getElementById("search");

let allRecipes = [];

// 🔥 Load recipes from Firebase
db.collection("recipes").get().then(snapshot => {
  snapshot.forEach(doc => {
    allRecipes.push(doc.data());
  });

  // Show only famous recipes on first load
  const famous = allRecipes.filter(r => r.isFamous === true);
  render(famous);
});

// 🎨 Render recipes
function render(list) {
  recipesDiv.innerHTML = "";

  list.forEach(r => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h2>${r.name}</h2>
      <div class="cat">${r.category || ""}</div>

      <h4>🧺 Ingredients</h4>
      <ul>${(r.ingredients || []).map(i => `<li>${i}</li>`).join("")}</ul>

      <h4>🌿 Benefits</h4>
      <p>${r.benefits || ""}</p>

      <h4>⚠️ Avoid For</h4>
      <p>${r.avoidFor || ""}</p>
    `;

    recipesDiv.appendChild(div);
  });
}

// 🔍 Search logic
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();

  if (q === "") {
    // When empty → show famous only
    render(allRecipes.filter(r => r.isFamous === true));
  } else {
    // When searching → search all
    render(allRecipes.filter(r => 
      r.name.toLowerCase().includes(q)
    ));
  }
});
