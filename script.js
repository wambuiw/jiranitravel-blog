// script.js
// 1. Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });

  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  });
}

// 2. Back to Top
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 3. Like Button
document.querySelectorAll(".like-btn").forEach((btn) => {
  const articleId = btn.getAttribute("data-id");
  const countSpan = btn.querySelector(".like-count");

  let count = parseInt(localStorage.getItem(articleId)) || 0;
  countSpan.textContent = count;

  btn.addEventListener("click", () => {
    count++;
    localStorage.setItem(articleId, count);
    countSpan.textContent = count;
  });
});
