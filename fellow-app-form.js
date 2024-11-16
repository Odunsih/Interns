document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Gather form data
        const applicationData = {
            surname: document.getElementById("Surname").value,
            firstname: document.getElementById("firstname").value,
            dob: document.getElementById("DOB").value,
            address: document.getElementById("address").value,
            state: document.getElementById("state").value,
            lga: document.getElementById("LGA").value,
            university: document.getElementById("nameOfUni").value,
            qualification: document.getElementById("Organization_Type").value,
            course: document.getElementById("CourseOfStudy").value,
        };

        // Validate form
        if (Object.values(applicationData).some((field) => field === "")) {
            showPopup("Please fill in all fields!");
            return;
        }

        // Save the application data to localStorage
        const applications = JSON.parse(localStorage.getItem("applications")) || [];
        applications.push(applicationData);
        localStorage.setItem("applications", JSON.stringify(applications));

        // Redirect to notifications page
        showPopup("Application submitted")
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
