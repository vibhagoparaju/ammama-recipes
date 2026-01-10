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

db.collection("recipes").get().then(snapshot => {
  snapshot.forEach(doc => {
    allRecipes.push(doc.data());
  });
  render(allRecipes);
});

function render(list){
  recipesDiv.innerHTML = "";
  list.forEach(r => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h2>${r.name}</h2>
      <p>${r.category}</p>
      <ul>${(r.ingredients||[]).map(i=>"<li>"+i+"</li>").join("")}</ul>
    `;
    recipesDiv.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  render(allRecipes.filter(r => r.name.toLowerCase().includes(q)));
});
