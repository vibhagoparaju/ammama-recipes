let foods = [];

const container = document.getElementById("recipeContainer");

function loadRecipesFromFirebase() {
  console.log("🔥 Loading recipes from Firebase...");

  db.collection("recipes")
    .get()
    .then(snapshot => {
      console.log("📦 Snapshot size:", snapshot.size);

      foods = snapshot.docs.map(doc => doc.data());
      console.log("✅ Recipes:", foods);

      render();
    })
    .catch(error => {
      console.error("❌ Firebase error:", error);
    });
}

function render() {
  container.innerHTML = "";

  if (foods.length === 0) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  foods.forEach(r => {
    const div = document.createElement("div");
    div.className = "card bg-green";
    div.innerHTML = `
      <h3>${r.name}</h3>
      <p>${r.category}</p>
    `;
    container.appendChild(div);
  });
}

loadRecipesFromFirebase();
