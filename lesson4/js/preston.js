let currentDate = new Date();
let Year = currentDate.getFullYear();
document.getElementById("year").textContent = Year;


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


const dayName = [
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
const currentDate = dayName + "," + " " + monthName + " " + dateToday.getDate() + " " + year;
const option = {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'};
document.getElementById("currentDate").textContent = currentDate;