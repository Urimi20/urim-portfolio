const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".nav-link");

function closeMenu() {
  navbar.classList.replace("translate-x-0", "translate-x-full");
  overlay.classList.add("hidden");
}

function openMenu() {
  navbar.classList.replace("translate-x-full", "translate-x-0");
  overlay.classList.remove("hidden");
}

burger.addEventListener("click", () => {
  const isOpen = navbar.classList.contains("translate-x-0");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener("click", closeMenu);

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
