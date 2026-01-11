// 🔥 Firebase
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

const recipesDiv = document.getElementById("recipes");
const searchInput = document.getElementById("search");

let allRecipes = [];
let openedCard = null;

// Load from Firebase
db.collection("recipes").get().then(snapshot => {
  snapshot.forEach(doc => allRecipes.push(doc.data()));
  render(allRecipes.filter(r => r.isFamous === true));
});

// Search
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  if (q === "") {
    render(allRecipes.filter(r => r.isFamous === true));
  } else {
    render(allRecipes.filter(r => r.name.toLowerCase().includes(q)));
  }
});

// Render cards
function render(list) {
  recipesDiv.innerHTML = "";
  openedCard = null;

  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    // Guaranteed GitHub Pages safe image
    const img = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(r.name.replace(/ /g,"_"))}.jpg`;

    card.style.backgroundImage = `url(${img})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.backgroundColor = "#f3fff4";

    card.innerHTML = `
      <div class="card-overlay">
        <h2 class="title">${r.name}</h2>
        <div class="cat">${r.category || ""}</div>

        <div class="details">
          <h4>🧺 Ingredients</h4>
          <ul>${(r.ingredients||[]).map(i=>`<li>${i}</li>`).join("")}</ul>

          <h4>👩‍🍳 Method</h4>
          <ol>${(r.method||[]).map(s=>`<li>${s}</li>`).join("")}</ol>

          <h4>🌿 Benefits</h4>
          <p>${r.benefits||""}</p>

          <h4>⚠️ Avoid For</h4>
          <p>${r.avoidFor||""}</p>
        </div>
      </div>
    `;

    card.querySelector(".title").addEventListener("click", () => {
      if (openedCard && openedCard !== card) {
        openedCard.classList.remove("open");
      }
      card.classList.toggle("open");
      openedCard = card.classList.contains("open") ? card : null;
    });

    recipesDiv.appendChild(card);
  });
}
