const studentList = document.querySelector('#student-list tbody');
const searchBar = document.querySelector('#search-bar');
const addStudentForm = document.querySelector('#add-student-form');
const updateStudentForm = document.querySelector('#update-student-form');
const deleteStudentForm = document.querySelector('#delete-student-form');

// Get all students
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

    const idCell = document.createElement('td');
    idCell.textContent = student.id;
    tableRow.appendChild(idCell);

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

// Add a new student
async function addStudent(name, rollNumber, class, obtainedMarks, phoneNumber) {
  const response = await axios.post('/add-student', {
    name,
    rollNumber,
    class,
    obtainedMarks,
    phoneNumber,
  });

  // If the response is successful, add the student to the list
  if (response.status === 201) {
    const student = response.data;
    displayStudents([student]);
  } else {
    // Handle the error
    console.log(response.statusText);
  }
}

// Update a student
async function updateStudent(id, name, rollNumber, class, obtainedMarks, phoneNumber) {
  const response = await axios.put(`/students/<span class="math-inline">\{id\}\`, \{
name,
rollNumber,
class,
obtainedMarks,
phoneNumber,
\}\);
// If the response is successful, update the student in the list
if \(response\.status \=\=\= 200\) \{
const student \= response\.data;
displayStudents\(\[student\]\);
\} else \{
// Handle the error
console\.log\(response\.statusText\);
\}
\}
// Delete a student
async function deleteStudent\(id\) \{
const response \= await axios\.delete\(\`/students/</span>{id}`);

  // If the response is successful, remove the student from the list
  if (response.status === 200) {
    const students = await getStudents();
    displayStudents(students);
  } else {
    // Handle the error
    console.log(response.statusText);
  }
}

// Get all students when the page loads
getStudents()
  .then((students) => {
    displayStudents(students);
  })
  .catch(console.log);

// Search
