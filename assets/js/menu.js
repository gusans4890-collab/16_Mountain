const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".header_nav");

headerToggle.addEventListener("click", () => {
    headerNav.classList.toggle("show");
});
