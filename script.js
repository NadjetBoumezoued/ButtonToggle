const modeToggleBtn = document.getElementById("mode-toggle");
const body = document.body;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

modeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("normal-mode");
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
    } else {
        body.classList.remove("normal-mode");
        body.classList.add("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    }
});
