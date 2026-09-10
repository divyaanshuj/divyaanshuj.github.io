const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-button");
const siteMenu = document.querySelector(".site-menu");
const year = document.querySelector("#year");

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

if (year) {
  year.textContent = new Date().getFullYear();
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

menuButton?.addEventListener("click", () => {
  const isOpen = siteMenu?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

siteMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteMenu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});
