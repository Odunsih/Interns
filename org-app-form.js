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
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Gather form data
        const companyName = document.getElementById("companyName").value;
        const state = document.getElementById("State").value;
        const internshipRole = document.getElementById("internshipRole").value;
        const internType = document.getElementById("Intern-type").value;
        const descriptions = document.getElementById("descriptions").value;

        // Validate form data
        if (!companyName || !state || !internshipRole || !descriptions || internType === "cit") {
            showPopup("Please fill in all fields!");
            return;
        }

        // Create a new internship object
        const internshipData = {
            companyName,
            state,
            internshipRole,
            internType,
            descriptions,
        };

        // Save the internship to localStorage
        const internships = JSON.parse(localStorage.getItem("internships")) || [];
        internships.push(internshipData);
        localStorage.setItem("internships", JSON.stringify(internships));

        // Show popup confirmation
        const popup = document.getElementById("popupMessage");
        const popupText = document.getElementById("popupText");
        popupText.textContent = "Internship created successfully!";
        popup.classList.remove("hidden");

        // Hide popup after 3 seconds
        setTimeout(() => {
            popup.classList.add("hidden");
        }, 3000);

        // Clear form fields
        document.querySelector("form").reset();
    });
});



function showPopup(message) {
    const popup = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;
    popup.classList.remove("hidden");

    // Set timeout to automatically close the popup after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 3000);
}

function closePopup() {
    const popup = document.getElementById("popupMessage");
    popup.classList.add("hidden");
}


