const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON requests
app.use(bodyParser.json());

// Add a new student
app.post('/add-student', async (req, res) => {
  const name = req.body.name;
  const rollNumber = req.body.rollNumber;
  const class = req.body.class;
  const obtainedMarks = req.body.obtainedMarks;
  const phoneNumber = req.body.phoneNumber;

  // Save the student to the database
  // ...

  // Return a success response
  res.status(201).json({ message: 'Student added successfully' });
});

// Get all students
app.get('/students', async (req, res) => {
  // Get all students from the database
  // ...

  // Return the students
  res.json(students);
});

// Get a student by ID
app.get('/students/:id', async (req, res) => {
  const id = req.params.id;

  // Get the student with the given ID from the database
  // ...

  // If the student exists, return it
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
