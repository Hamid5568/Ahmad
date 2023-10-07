// Get all students
const getAllStudents = async () => {
  const response = await axios.get('/students');

  // Return the students
  return response.data;
};

// Add a new student
const addStudent = async (name, rollNumber, class, obtainedMarks, phoneNumber) => {
  const response = await axios.post('/add-student', {
    name,
    rollNumber,
    class,
    obtainedMarks,
    phoneNumber,
  });

  // Return the student
  return response.data;
};

// Update a student
const updateStudent = async (id, name, rollNumber, class, obtainedMarks, phoneNumber) => {
  const response = await axios.put(`/students/${id}`, {
    name,
    rollNumber,
    class,
    obtainedMarks,
    phoneNumber,
  });

  // Return the updated student
  return response.data;
};

// Delete a student
const deleteStudent = async (id) => {
  await axios.delete(`/students/${id}`);
};
