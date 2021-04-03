// Footer year js
let currentDate = new Date();
let Year = currentDate.getFullYear();
document.getElementById("year").textContent = Year;

// Toggle js
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Current date js
const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dateToday = new Date();
const dayName = dayNames[dateToday.getDay()];
const monthName = months[dateToday.getMonth()];
const year = dateToday.getFullYear();
const presentDate = dayName + "," + " " + dateToday.getDate() + " " + monthName + " " + year;
document.getElementById("presentDate").textContent = presentDate;