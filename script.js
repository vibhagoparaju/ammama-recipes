const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const teluguToggle = document.getElementById("teluguToggle");

let recipes = [];
let isTelugu = false;

// Load recipes from Firestore
db.collection("recipes").get()
  .then(snapshot => {
    recipes = snapshot.docs.map(doc => doc.data());
    console.log("🔥 Firebase data:", recipes);
    render();
  })
  .catch(error => {
    console.error("❌ Firebase error:", error);
  });

function render() {
  container.innerHTML = "";

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = recipes.filter(r => {
    const matchSearch = search
      ? r.name.toLowerCase().includes(search)
      : r.isFamous === true;

    const matchCategory =
      category === "All" || r.category === category;

    return matchSearch && matchCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No recipes found</p>";
    return;
  }

  filtered.forEach(r => {
    const div = document.createElement("div");
    div.className = "recipe-card";

    div.innerHTML = `
      <h3 class="${isTelugu ? 'telugu' : ''}">
        ${isTelugu ? r.telugu : r.name}
      </h3>
      <p><b>Category:</b> ${r.category}</p>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    `;

    container.appendChild(div);
  });
}

searchInput.addEventListener("input", render);
categoryFilter.addEventListener("change", render);
teluguToggle.addEventListener("click", () => {
  isTelugu = !isTelugu;
  render();
});
