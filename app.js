// Step 1: get references to elements

const nameInput = document.getElementById("nameInput");
const timeSelect = document.getElementById("timeSelect");
const generateBtn = document.getElementById("generateBtn");
const greetingOutput = document.getElementById("greetingOutput");

//  step 2: define the function to generaye greeting.

function generateGreeting() {
  const name = nameInput.value.trim(); // get name input
  const timeOfDay = timeSelect.value; // get selected time

  let greeting;

  // step3: conditional logic to choose greetings

  if (timeOfDay === "morning") {
    greeting = `Good Morning, ${name}!`;
  } else if (timeOfDay === "afternoon") {
    greeting = `Good Afternoon, ${name}!`;
  } else if (timeOfDay === "evening") {
    greeting = `Good Evening, ${name}!`;
  } else {
    greeting = `Hello, ${name}`;
  }
  // step4 update output paragraph
  greetingOutput.textContent = greeting;
}

// step5 attach event listener to button
nameInput.addEventListener("input", generateGreeting);
timeSelect.addEventListener("change", generateGreeting);
console.log(greeting);
