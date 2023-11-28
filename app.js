// Import any necessary modules or dependencies
import { elementHandler, cardTilt } from "./js/utils/utilityFunctions.js";

// Global variables or constants

function initializeApp() {
    // Code to initialize your application
    cardTilt();    
    addEventListeners();
}

function addEventListeners() {
    // Event listeners to interactive elements
    document.addEventListener('scroll', elementHandler);
}

// Main execution - Call the initializeApp function to start your application
initializeApp();
