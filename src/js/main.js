document.addEventListener("DOMContentLoaded", loadData);

const tableBody = document.getElementById("course-table");

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Kunde inte hämta data");
        }
        const courses = await response.json();
        renderTable(courses);

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