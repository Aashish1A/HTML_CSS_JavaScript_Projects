// Questions array containing objects with the question and answers
const questions = [
    {
        question: "What is 'hoisting' in JavaScript?",
        answer: [
            {text: "The process of moving function and variable declarations to the top", correct: true},
            {text: "The use of 'this' keyword to reference an object", correct: false},
            {text: "A technique to pause JavaScript execution", correct: false},
            {text: "A function that is called when an event occurs", correct: false},
        ]
    },
    {
        question: "Which data type is not primitive in JavaScript?",
        answer: [
            {text: "String", correct: false},
            {text: "Boolean", correct: false},
            {text: "Array", correct: true},
            {text: "Number", correct: false},
        ]
    },
    {
        question: "Which method is used to convert a JSON string into an object?",
        answer: [
            {text: "JSON.parse()", correct: true},
            {text: "JSON.stringify()", correct: false},
            {text: "JSON.objectify()", correct: false},
            {text: "JSON.convert()", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'strict mode' in JavaScript?",
        answer: [
            {text: "To enforce stricter parsing and error handling", correct: true},
            {text: "To allow use of deprecated syntax", correct: false},
            {text: "To optimize the performance of the code", correct: false},
            {text: "To ensure asynchronous execution", correct: false},
        ]
    },
    {
        question: "What will the following expression return: '5' + 3?",
        answer: [
            {text: "'53'", correct: true},
            {text: "8", correct: false},
            {text: "'8'", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "How can you check if an array includes a specific element?",
        answer: [
            {text: "array.includes()", correct: true},
            {text: "array.contains()", correct: false},
            {text: "array.find()", correct: false},
            {text: "array.exists()", correct: false},
        ]
    },
    {
        question: "What is the output of 0.1 + 0.2 === 0.3 in JavaScript?",
        answer: [
            {text: "false", correct: true},
            {text: "true", correct: false},
            {text: "undefined", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answer: [
            {text: "const", correct: true},
            {text: "let", correct: false},
            {text: "var", correct: false},
            {text: "static", correct: false},
        ]
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answer: [
            {text: "'==' checks for value equality, '===' checks for value and type equality", correct: true},
            {text: "There is no difference", correct: false},
            {text: "'===' is used for comparisons in strict mode only", correct: false},
            {text: "'==' performs type coercion, '===' does not", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answer: [
            {text: "It refers to the current object or execution context", correct: true},
            {text: "It refers to the parent object", correct: false},
            {text: "It refers to the function itself", correct: false},
            {text: "It refers to the global object in strict mode", correct: false},
        ]
    }
];


// Get the HTML elements by their ID to interact with them
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;  // Keeps track of the current question number
let score = 0;  // Keeps track of the user's score

// Function to start the quiz, called initially and when the quiz restarts
function startQuiz(){
    currentQuestionIndex = 0;  // Reset question index to the first question
    score = 0;  // Reset the score to 0
    nextButton.innerHTML = "Next";  // Set the text on the Next button
    showQuestion();  // Call the function to show the first question
}

// Function to display the current question and its answers
function showQuestion(){
    resetState();  // Reset the state of buttons and UI
    startTimer();  // Start the timer for each new question
    let currentQuestion = questions[currentQuestionIndex];  // Get the current question from the array
    let questionNo = currentQuestionIndex + 1;  // Increment question number for display
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  // Display the question text

    // Loop through each answer option and create a button for it
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");  // Create a new button element
        button.innerHTML = answer.text;  // Set the button text to the answer text
        button.classList.add("btn");  // Add a CSS class to style the button
        answerButtons.appendChild(button);  // Append the button to the answerButtons container

        // Store if the answer is correct in the button's dataset (for later use)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        // Add an event listener to the button so it knows when it's clicked
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the state of the UI, removing previous answers and hiding the Next button
function resetState(){
    nextButton.style.display = "none";  // Hide the Next button until an answer is selected
    while(answerButtons.firstChild){  // Remove all previous answer buttons
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function that runs when an answer is selected
function selectAnswer(e){
    stopTimer(); // Stop the timer when an answer is selected
    const selectedBtn = e.target;  // Get the button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true";  // Check if the selected answer is correct

    // If the answer is correct, increment the score and add the correct class for styling
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;  // Increment the score
    } else {
        selectedBtn.classList.add("incorrect");  // If incorrect, add incorrect class
    }

    // Highlight all the correct answers and disable all buttons after one is selected
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");  // Highlight the correct answer
        }
        button.disabled = true;  // Disable all buttons once an answer is selected
    });
    nextButton.style.display = "block";  // Show the Next button to move to the next question
}

// Function that runs when the Next button is clicked to show the next question
function handleNextButton(){
    currentQuestionIndex++;  // Move to the next question
    if(currentQuestionIndex < questions.length){
        showQuestion();  // Show the next question if there are any left
    }
    else{
        showScore();  // If all questions are answered, show the final score
    }
}

// Function to display the final score at the end of the quiz
function showScore(){
    resetState();  // Reset the UI
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;  // Display the score
    nextButton.innerHTML = "Play Again";  // Change the Next button to Play Again
    nextButton.style.display = "block";  // Show the Play Again button
}

// Add an event listener to the Next button
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();  // If there are more questions, move to the next one
    }
    else{
        startQuiz();  // If the quiz is over, restart the quiz
    }
})

// Timer function
const timerElement = document.querySelector("#timer");  // Timer element in the HTML
let timeLeft = 30;  // 30 seconds for each question
let timer;  // To store the interval timer

// Start the timer for 30 seconds
function startTimer() {
    timeLeft = 30;  // Set initial time to 30 seconds
    timerElement.innerHTML = `Time left: ${timeLeft}s`;  // Display the initial time

    clearInterval(timer);  // Clear any existing timer (if there's any from a previous question)

    // Set a new interval that decreases the time left every second
    timer = setInterval(() => {
        timeLeft--;  // Decrement the time left

        // Update the UI with the new time value
        if (timeLeft >= 0) {
            timerElement.innerHTML = `Time left: ${timeLeft}s`;
        }

        // If the time runs out (timeLeft reaches 0), stop the timer and go to the next question
        if (timeLeft <= 0) {
            clearInterval(timer);  // Stop the timer
            timerElement.innerHTML = "Time left: 0s";  // Ensure the timer shows 0s
            handleNextButton();  // Automatically go to the next question
        }
    }, 1000);  // Update every 1 second
}


// Stop the timer (when an answer is selected)
function stopTimer() {
    clearInterval(timer);
}

// Call the startQuiz function when the page loads to start the quiz
startQuiz();