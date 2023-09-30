// Define an array of subjects
const subjects = ["Math", "Science", "English", "History", "Art"];

// Define an array to store the scores and grades
const scores = [];
const grades = [];

// Define a function to prompt the user for each subject score and update the corresponding score and grade
function getGrades() {
  for (let i = 0; i < subjects.length; i++) {
    let score = prompt(`Enter score for ${subjects[i]}:`);
    scores[i] = score;
    grades[i] = calculateGrade(score);
  }
}

// Define a function to calculate the grade based on the score
function calculateGrade(score) {
  if (score < 40) {
    return "F";
  } else if (score < 45) {
    return "E";
  } else if (score < 50) {
    return "D";
  } else if (score < 60) {
    return "C";
  } else if (score < 70) {
    return "B";
  } else {
    return "A";
  }
}

// Call the getGrades function to prompt the user for each subject score
getGrades();

// Print the grades for each subject
for (let i = 0; i < subjects.length; i++) {
  console.log(`${subjects[i]}: ${scores[i]} - ${grades[i]}`);
}