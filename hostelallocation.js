// Define an array of objects to store student details
const students = [];

// Define an array of hostels, each initialized with an empty array
const hostels = [
  { name: "Hostel A", students: [] },
  { name: "Hostel B", students: [] },
  { name: "Hostel C", students: [] },
];

// Define a function to allocate the user to a hostel
function allocateToHostel(student) {
  // Loop through each hostel
  for (let i = 0; i < hostels.length; i++) {
    // If the hostel has less than 4 students, add the student to the hostel
    if (hostels[i].students.length < 4) {
      hostels[i].students.push(student);
      console.log(`Allocated ${student.firstName} ${student.lastName} to ${hostels[i].name}`);
      return; // Exit the function
    }
  }
  // If all hostels are full, prompt the user to allocate to the next hostel
  console.log(`All hostels are full. Please allocate ${student.firstName} ${student.lastName} to the next hostel.`);
}

// Define a function to prompt the user for student details
function promptForDetails() {
  // Prompt for student details
  const firstName = prompt("Enter first name:");
  const lastName = prompt("Enter last name:");
  const gender = prompt("Enter gender:");
  const age = prompt("Enter age:");

  // Create a student object with the entered details
  const student = {
    firstName,
    lastName,
    gender,
    age,
  };

  // Add the student to the array of students
  students.push(student);

  // Allocate the student to a hostel
  allocateToHostel(student);
}

// Prompt for 4 students
for (let i = 0; i < 4; i++) {
  promptForDetails();
}

// Log the number of students in each hostel
console.log(`Hostel A has ${hostels[0].students.length} students`);
console.log(`Hostel B has ${hostels[1].students.length} students`);
console.log(`Hostel C has ${hostels[2].students.length} students`);
