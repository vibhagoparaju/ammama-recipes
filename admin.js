// Firebase config (same as your main site)
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

// Save recipe
function saveRecipe() {
  const name = document.getElementById("name").value.trim();
  const telugu = document.getElementById("telugu").value.trim();
  const category = document.getElementById("category").value.trim();
  const ingredients = document.getElementById("ingredients").value.split("\n");
  const method = document.getElementById("method").value.split("\n");
  const isFamous = document.getElementById("famous").checked;

  if (!name) {
    alert("Recipe name required");
    return;
  }

  db.collection("recipes").doc(name).set({
    name: name,
    nameTelugu: telugu,
    category: category,
    ingredients: ingredients,
    method: method,
    benefits: [],
    avoidFor: [],
    isFamous: isFamous
  }).then(() => {
    document.getElementById("status").innerText = "✅ Recipe saved!";
  }).catch(err => {
    document.getElementById("status").innerText = "❌ Error: " + err;
  });
}
