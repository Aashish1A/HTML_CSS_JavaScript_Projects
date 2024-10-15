document.getElementById("btn").addEventListener("click", function() {
    const input = document.querySelector("#input").value;
    const result = document.querySelector("#result");

    // Check if the input is empty
    if (input === "") {
        result.textContent = "Please enter something.";
    } else {
        // Convert the input to lowercase to ignore case sensitivity
        const lowerCaseInput = input.toLowerCase();
        const reversedInput = lowerCaseInput.split('').reverse().join('');

        // Check if the input is a palindrome
        if (lowerCaseInput === reversedInput) {
            result.textContent = `${input} is a palindrome!`;
        } else {
            result.textContent = `${input} is not a palindrome.`;
        }
    }
});
