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

// Task 3: Dynamic Inventory Management – Adding and Removing Items

const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) { // Write a function that creates a new <li> element representing a product.
    let newLi = document.createElement("li"); 
    newLi.setAttribute("class","product-item");
    newLi.setAttribute("id",product); 
    newLi.setAttribute("onclick",`removeInventoryItem("${product}")`);
    newLi.textContent = product; 
    inventoryList.appendChild(newLi); 
};

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

// Test Case
addInventoryItem("Click me"); 
addInventoryItem("Add a product below"); 

productForm.addEventListener('submit', (event) => { 
    let productName = document.getElementById('productName').value; 
    if (productName === '') { 
        error.textContent = 'Product name is required'; 
        event.preventDefault(); 
    } else {
        error.textContent = '';
        addInventoryItem(productName); 
        event.preventDefault(); 
    }
});

// Writing a separate function that removes a specific <li> when it is clicked. Use removeChild within the inventory list to remove the clicked item.
function removeInventoryItem(id) { 
    let invItem = document.getElementById(id);
    inventoryList.removeChild(invItem); 
}
 
// Task 4: Business Customer Section – Handling Event Bubbling

// Create a nested structure: a parent container with the id "customerSection" and multiple child elements with the class "customer-card".
const customerSection = document.getElementById("customerSection");

// Function to add a customer card
function addCustomerCard(customerName) {
    const card = document.createElement("div");
    card.setAttribute("class", "customer-card");
    card.textContent = customerName;
    
   // Customer card click event
    card.addEventListener("click", function(event) {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevent event bubbling
    });
    
    // Append to customer section
    customerSection.appendChild(card);
    console.log(`Added Customer: ${customerName}`);
}

// Click event on customer section to demonstrate bubbling
customerSection.addEventListener("click", function() {
    console.log("Customer section clicked");
});

