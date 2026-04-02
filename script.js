// 🐶 EDIT THIS ONLY
const pet = {
  name: "Buddy",
  info: "Golden Retriever • Friendly • Needs medication",
  owner: "John Doe",
  phone: "09123456789",
  image: "https://i.imgur.com/4AiXzf8.jpeg"
};

// Inject data
document.getElementById("petName").textContent = pet.name;
document.getElementById("petInfo").textContent = pet.info;
document.getElementById("ownerName").textContent = "Owner: " + pet.owner;
document.getElementById("petImage").src = pet.image;

document.getElementById("callBtn").href = "tel:" + pet.phone;
document.getElementById("smsBtn").href = "sms:" + pet.phone;

// 🌙 Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
