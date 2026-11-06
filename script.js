
/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


/* FOOTER YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* DARK / LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("portfolio-theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("portfolio-theme", "light");

    }

});
