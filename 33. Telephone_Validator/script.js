// Select DOM elements
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("output");

// Regular expression for valid US numbers
const validUSNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

// Event listener for the "Check" button
checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value.trim();

    // Check if input is empty
    if (!inputValue) {
        alert("Please provide a phone number");
        return;
    }

    // Check if the number is valid
    if (validUSNumberRegex.test(inputValue)) {
        resultsDiv.textContent = `Valid US number: ${inputValue}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${inputValue}`;
    }
});

// Event listener for the "Clear" button
clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
    userInput.value = "";
});
