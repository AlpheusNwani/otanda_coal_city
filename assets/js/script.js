document.addEventListener("DOMContentLoaded", () => {

  // ================= MOBILE MENU =================
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeMenu() {
    mobileMenu.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  if (menuBtn && mobileMenu && overlay) {

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (mobileMenu.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });

  }

  // ================= ACTIVE PAGE HIGHLIGHT =================
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-green-700", "font-bold");
    }
  });

  // ================= CONTACT FORM VALIDATION =================
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }

});