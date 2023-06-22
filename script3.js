const employees = [
  { name: "Apurva Kale", stressLevel: 50, anxietyLevel: 30 },
  { name: "Vaishnavi Mane", stressLevel: 85, anxietyLevel: 98 },
  { name: "Vaishnavi More", stressLevel: 63, anxietyLevel: 9 },
  { name: "Shivani Miraje", stressLevel: 30, anxietyLevel: 40 },
  { name: "Mrinalishi Patane", stressLevel: 0, anxietyLevel:  87},
  { name: "Aishwarya", stressLevel: 89, anxietyLevel: 90},
];

// Function to filter employees by stress level
function filterByStressLevel(stressLevel) {
  const filteredEmployees = employees.filter(
    (employee) => employee.stressLevel >= stressLevel
  );
  updateEmployeeList(filteredEmployees);
}

// Function to filter employees by anxiety level
function filterByAnxietyLevel(anxietyLevel) {
  const filteredEmployees = employees.filter(
    (employee) => employee.anxietyLevel >= anxietyLevel
  );
  updateEmployeeList(filteredEmployees);
}

// Function to filter employees by both stress and anxiety levels
function filterByStressAndAnxietyLevel(stressLevel, anxietyLevel) {
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.stressLevel >= stressLevel && employee.anxietyLevel >= anxietyLevel
  );
  updateEmployeeList(filteredEmployees);
}

// Function to update the employee list on the webpage
function updateEmployeeList(filteredEmployees) {
  const listContainer = document.getElementById("employee-list");
  listContainer.innerHTML = ""; // Clear previous content

  if (filteredEmployees.length === 0) {
    listContainer.innerHTML = "No employees found.";
    return;
  }

  const list = document.createElement("ul");
  filteredEmployees.forEach((employee) => {
    const listItem = document.createElement("li");
    listItem.textContent = employee.name;
    list.appendChild(listItem);
  });

  listContainer.appendChild(list);
}