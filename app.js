// Import any necessary modules or dependencies
import { elementHandler, animateCursor, cardTilt } from "./js/utils/utilityFunctions.js";

// Global variables or constants

function initializeApp() {
    // Code to initialize your application
    // animateCursor();
    cardTilt();    
    addEventListeners();
}

function addEventListeners() {
    // Event listeners to interactive elements
    $('.right-section')[0].addEventListener('scroll', elementHandler);
}

// Main execution - Call the initializeApp function to start your application
initializeApp();
