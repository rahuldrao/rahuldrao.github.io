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

document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-posts");
  blogContainer.innerHTML = "";

  // Sort blog posts by date (descending)
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("col-md-6");
    postElement.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${new Date(post.date).toDateString()}</h6>
          <p class="card-text">${post.content}</p>
        </div>
      </div>
    `;
    blogContainer.appendChild(postElement);
  });
});
