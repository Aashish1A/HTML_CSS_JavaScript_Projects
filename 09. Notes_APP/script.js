const inputContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    inputContainer.innerHTML = localStorage.getItem("notes") || "";
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", inputContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    // Create wrapper div to hold both the inputBox and the delete button
    let wrapper = document.createElement("div");
    wrapper.className = "note-wrapper";  // Add class for styling

    // Create the editable inputBox
    let inputBox = document.createElement("P");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");  // Make the text editable

    // Create the delete image
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.className = "delete-btn";  // Add class for styling the delete button

    // Append inputBox and img to the wrapper div
    wrapper.appendChild(inputBox);
    wrapper.appendChild(img);

    // Append the wrapper to the container
    inputContainer.appendChild(wrapper);

    updateStorage();  // Update local storage
});

// Handle click events for the container
inputContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        // Remove the entire wrapper div when delete image is clicked
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Handle the contenteditable elements
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();  // Update storage on keyup
            }
        });
    }
});

// Prevent Enter key from creating a new paragraph
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
