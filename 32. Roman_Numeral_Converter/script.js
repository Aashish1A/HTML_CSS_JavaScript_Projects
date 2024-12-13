const input = document.getElementById("number"); // Updated ID
const checkBtn = document.getElementById("convert-btn"); // Updated ID
const outputBox = document.getElementById("output-box"); // Updated ID
const output = document.getElementById("output");

// Function to convert number to Roman numeral
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];
    let result = "";
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

// Add event listener for the button
checkBtn.addEventListener("click", () => {
    const number = parseInt(input.value, 10);

    if (isNaN(number)) {
        output.textContent = "Please enter a valid number";
        outputBox.style.display = "block";
    } else if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        outputBox.style.display = "block";
    } else if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        outputBox.style.display = "block";
    } else {
        const romanNumeral = convertToRoman(number);
        output.textContent = romanNumeral;
        outputBox.style.display = "block";
    }
});