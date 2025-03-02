// Task 1: Business Dashboard – DOM Element Selection and Creation

// Selecting the dashboard container using both getElementById and querySelector
const dashboard = document.getElementById("dashboard");
const dashboardQuery = document.querySelector("#dashboard");

// Create a new div element for the Revenue metric card
const revenueCard = document.createElement("div");

// Assigning attributes to the revenue card
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populate the card with a title 
revenueCard.innerHTML = "<strong>Revenue:</strong> $0";

// Append the new metric card to the dashboard
dashboard.appendChild(revenueCard);

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// Selectin all metric cards
const metricCards = document.querySelectorAll(".metric-card");

// Convert NodeList to an array and update each metric card
const metricCardsArray = [...metricCards];
metricCardsArray.forEach(card => {
    card.innerText += " - Updated"; // Append text to indicate update
    card.style.backgroundColor = "#AD00FA"; // Change background color to purple
});