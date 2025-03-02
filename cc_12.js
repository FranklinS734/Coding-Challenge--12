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

