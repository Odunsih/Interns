function out() {
    // Clear the current user and redirect to login
    localStorage.removeItem("currentFellowID");
    window.location.href = "login.html";
}

function apply() {
    window.location.href = "fellow-app-form.html";
}

function dropdownMenu() {
    var x = document.getElementById("dropdownclick");
    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Account button logic
    const accountButton = document.querySelector(".dropbtn");
    const currentUser = localStorage.getItem("currentFellowID");

    if (currentUser) {
        accountButton.innerHTML = `<i class="bi bi-gear"></i> ${currentUser} <i class="bi bi-chevron-down"></i>`;
    } else {
        accountButton.innerHTML = `<i class="bi bi-gear"></i> Account <i class="bi bi-chevron-down"></i>`;
    }

    // Display internships dynamically
    const internshipsContainer = document.getElementById("internshipsContainer");
    const searchInput = document.getElementById("SearchInput");
    const searchButton = document.getElementById("Search");

    function displayInternships(filter = "") {
        const internships = JSON.parse(localStorage.getItem("internships")) || [];
        internshipsContainer.innerHTML = ""; // Clear existing content

        const filteredInternships = internships.filter((internship) =>
            filter === "" ||
            internship.companyName.toLowerCase().includes(filter.toLowerCase()) ||
            internship.internshipRole.toLowerCase().includes(filter.toLowerCase()) ||
            internship.internType.toLowerCase().includes(filter.toLowerCase()) ||
            internship.state.toLowerCase().includes(filter.toLowerCase()) ||
            internship.descriptions.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredInternships.length === 0) {
            internshipsContainer.innerHTML = "<p>No internships found.</p>";
            return;
        }

        filteredInternships.forEach((internship, index) => {
            const internshipCard = document.createElement("div");
            internshipCard.className = "company-container";
            internshipCard.innerHTML = `
                <div class="company-logo">
                    <img src="732.jpg" alt="${internship.companyName}">
                </div>
                <div class="company-info">
                    <h2>${internship.internshipRole}</h2>
                    <p><strong>Company:</strong> ${internship.companyName}</p>
                    <p><strong>Location:</strong> ${internship.state}</p>
                    <p><strong>Type:</strong> ${internship.internType}</p>
                    <p><strong>Descriptions:</strong> ${internship.descriptions}</p>
                    <button id="apply-${index}" class="apply-button">Apply</button>
                </div>
            `;
            internshipsContainer.appendChild(internshipCard);

            // Add apply button functionality
            internshipCard.querySelector(`#apply-${index}`).addEventListener("click", () => {
                window.location.href = "fellow-app-form.html";
            });
        });
    }

    // Initial display
    displayInternships();

    // Search functionality
    searchButton.addEventListener("click", () => {
        const filterText = searchInput.value.trim();
        displayInternships(filterText);
    });

    searchInput.addEventListener("input", () => {
        const filterText = searchInput.value.trim();
        displayInternships(filterText);
    });
});



const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
