const studentList = document.querySelector('#student-list tbody');
const searchBar = document.querySelector('#search-bar');

// Get all students from the backend
async function getStudents() {
  const response = await axios.get('/students');

  // If the response is successful, return the students
  if (response.status === 200) {
    return response.data;
  } else {
    // Handle the error
    console.log(response.statusText);
    return [];
  }
}

// Display the students in the table
function displayStudents(students) {
  studentList.innerHTML = '';

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const tableRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    tableRow.appendChild(nameCell);

    const rollNumberCell = document.createElement('td');
    rollNumberCell.textContent = student.rollNumber;
    tableRow.appendChild(rollNumberCell);

    const classCell = document.createElement('td');
    classCell.textContent = student.class;
    tableRow.appendChild(classCell);

    const obtainedMarksCell = document.createElement('td');
    obtainedMarksCell.textContent = student.obtainedMarks;
    tableRow.appendChild(obtainedMarksCell);

    const phoneNumberCell = document.createElement('td');
    phoneNumberCell.textContent = student.phoneNumber;
    tableRow.appendChild(phoneNumberCell);

    studentList.appendChild(tableRow);
  }
}

// Search for students by name or roll number
async function searchStudents(searchTerm) {
  const students = await getStudents();

  // Filter the students by name or roll number
  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Display the filtered students
  displayStudents(filteredStudents);
}

// Handle errors
function handleError(error) {
  console.log(error);

  // Display an error message to the user
  alert('An error occurred. Please try again later.');
}

// Get all students when the page loads
getStudents()
  .then((students) => {
    displayStudents(students);
  })
  .catch(handleError);

// Search for students when the user types in the search bar
searchBar.addEventListener('keyup', async function() {
  const searchTerm = this.value;

  try {
    await searchStudents(searchTerm);
  } catch (error) {
    handleError(error);
  }
});
