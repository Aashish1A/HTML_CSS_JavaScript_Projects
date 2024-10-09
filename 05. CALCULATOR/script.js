function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLast() {
    let display = document.querySelector('input[name="display"]');
    display.value = display.value.toString().slice(0, -1);
}

function addToDisplay(value) {
    let display = document.querySelector('input[name="display"]');
    // Prevent adding multiple operators consecutively
    if (!['+', '-', '*', '/'].includes(display.value.slice(-1)) || !['+', '-', '*', '/'].includes(value)) {
        display.value += value;
    }
}

function calculate() {
    let display = document.querySelector('input[name="display"]');
    display.value = eval(display.value);
}