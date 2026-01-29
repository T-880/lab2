document.addEventListener("DOMContentLoaded", loadData);

const tableBody = document.getElementById("course-table");
const searchInput = document.getElementById("search");

let allCourses = [];

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Kunde inte hämta data");
        }
        allCourses = await response.json();
        renderTable(allCourses);

    } catch (error) {
        console.error("Fel: " + error)
    }
}

function renderTable(courses) {
    tableBody.innerHTML = "";

    courses.forEach(course => {
        const row = document.createElement("tr");

        const codeCell = document.createElement("td");
        codeCell.textContent = course.code.toUpperCase();

        const nameCell = document.createElement("td");
        nameCell.textContent = course.coursename;

        const progressionCell = document.createElement("td");
        progressionCell.textContent = course.progression;

        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(progressionCell);

        tableBody.appendChild(row);
    });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredCourses = allCourses.filter(course =>
    course.code.toLowerCase().includes(searchTerm) ||
    course.coursename.toLowerCase().includes(searchTerm)
  );

  renderTable(filteredCourses);
});