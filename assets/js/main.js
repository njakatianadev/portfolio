window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const nav_menu = document.querySelector("#nav-menu");
  if (window.scrollY > 30) {
    header.classList.add("bg-[#2a2141]");
    nav_menu.classList.remove("border-b", "border-white");
  } else {
    header.classList.remove("bg-[#2a2141]");
    nav_menu.classList.add("border-b", "border-white");
  }
});

const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
