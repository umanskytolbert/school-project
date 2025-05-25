let arr = [];

function addStudent(student) {
  if (student.name && student.email) {
    arr.push(student);
    console.log(`Added ${student.name} (${student.email}) to the array`);
  } else {
    console.error("Missing name or email for adding a new student.");
  }
}

function getStudents() {
  if (arr.length > 0) {
    console.log(arr);
  } else {
    console.error("The array is empty. No students found.");
  }
}
