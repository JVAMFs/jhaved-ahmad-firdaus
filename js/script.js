// Init AOS
AOS.init();

// Navbar Auto Close on Click (biar user-friendly)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).toggle();
    }
  });
});
