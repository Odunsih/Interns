function out() {
    // Clear the current user and redirect to login
    localStorage.removeItem("currentFellowID");
    window.location.href = "login.html";
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
    const applicationsList = document.getElementById("applicationsList");

    // Load internships from local storage
    const internships = JSON.parse(localStorage.getItem("internships")) || [];

    // Display internships
    if (internships.length === 0) {
        applicationsList.innerHTML = "<p>No applications found.</p>";
        return;
    }

    internships.forEach((internship, index) => {
        const applicationCard = document.createElement("div");
        applicationCard.classList.add("application-card");

        applicationCard.innerHTML = `
            <h3>${internship.companyName}</h3>
            <p><strong>Location:</strong> ${internship.state}</p>
            <p><strong>Role:</strong> ${internship.internshipRole}</p>
            <p><strong>Type:</strong> ${internship.internType}</p>
            <p><strong>Description:</strong> ${internship.descriptions}</p>
            <button class="delete-btn" data-index="${index}">Remove</button>
        `;

        applicationsList.appendChild(applicationCard);
    });

    // Remove application
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            internships.splice(index, 1); // Remove selected application
            localStorage.setItem("internships", JSON.stringify(internships));
            location.reload(); // Refresh the page to update the list
        });
    });
});
