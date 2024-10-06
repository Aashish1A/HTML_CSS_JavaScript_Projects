const checkBoxes = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const quotes = document.querySelector(".progress-level");
const allQuotes = [
  "Elevate Your Day by Crushing Your Goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Wow! You just completed all the goals, time for chill :D"
]

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false
  },
  second: {
    name: "",
    completed: false
  },
  third: {
    name: "",
    completed: false
  }
};
let completedGoalsCount = Object.values(allGoals).filter( (goal) => goal.completed).length;
progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 Completed`;
quotes.innerText = allQuotes[completedGoalsCount];


// checkbox click
checkBoxes.forEach((checkBox) => {

  checkBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    });

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle("completed");
      const inputId = checkBox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter( (goal) => goal.completed).length;
      progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 Completed`;
      quotes.innerText = allQuotes[completedGoalsCount];
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } 
    else {
      progressBar.classList.add("show-error");
    }

  });
});

// Local Storage 

inputFields.forEach((input) => {
  
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  // save and display on UI
  input.value = allGoals[input.id].name;
  if(allGoals[input.id].completed){
    input.parentElement.classList.add("completed");
  }

  input.addEventListener("input", (e) => {
    if(allGoals[input.id].completed){
      input.value =allGoals[input.id].name
      return
    }

    allGoals[input.id].name = input.value; 
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  })
});
