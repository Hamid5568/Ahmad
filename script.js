const studentList = document.querySelector('#student-list tbody');
const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();

  const students = studentList.querySelectorAll('tr');

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const name = student.querySelector('td:nth-child(1)').textContent.toLowerCase();
    const rollNumber = student.querySelector('td:nth-child(2)').textContent.toLowerCase();

    if (name.includes(searchTerm) || rollNumber.includes(searchTerm)) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  }
});

// This code will connect the frontend to the backend using Node.js

const axios = require('axios');

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
  if (response
