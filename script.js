// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark"); // Save preference
  themeToggle.innerText = "☀️";
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light"); // Save preference
  themeToggle.innerText = "🌙";
}

// Check stored preference and apply theme
if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
