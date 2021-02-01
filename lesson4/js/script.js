let currentDate = new Date();
let Year = currentDate.getFullYear();
document.getElementById("year").textContent = Year;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

