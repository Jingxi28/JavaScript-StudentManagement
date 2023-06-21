// JavaScript array to maintain the student list
var students = [];

// Function to add a student to the list
function addStudent() {
  var studentID = document.getElementById("studentID").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var qualification = document.getElementById("qualification").value;

  // Create a student object
  var student = {
    studentID: studentID,
    firstName: firstName,
    lastName: lastName,
    qualification: qualification
  };

  // Add the student object to the array
  students.push(student);

  // Clear input fields
  document.getElementById("studentID").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("qualification").value = "";

  // Refresh the student list
  refreshList();
}

// Function to refresh the student list
function refreshList() {
  var studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  // Iterate over the students array and display each student
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var listItem = document.createElement("li");
    listItem.innerHTML =
      "Student ID: " +
      student.studentID +
      "<br>First Name: " +
      student.firstName +
      "<br>Last Name: " +
      student.lastName +
      "<br>Qualification: " +
      student.qualification +
      "<br>";
    studentList.appendChild(listItem);
  }
}

// Function to search for a student
function searchStudent() {
  var searchID = document.getElementById("searchID").value;
  var searchResult = document.getElementById("searchResult");
  searchResult.innerHTML = "";

  // Iterate over the students array and find the matching student
  var found = false;
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if (student.studentID == searchID) {
      searchResult.innerHTML =
        "Student ID: " +
        student.studentID +
        "<br>First Name: " +
        student.firstName +
        "<br>Last Name: " +
        student.lastName +
        "<br>Qualification: " +
        student.qualification;
      found = true;
      break;
    }
  }

  if (!found) {
    searchResult.innerHTML = "0 results";
  }
}