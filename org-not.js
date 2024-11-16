document.addEventListener("DOMContentLoaded", () => {
    const notificationsContainer = document.getElementById("notifications");
    const applications = JSON.parse(localStorage.getItem("applications")) || [];

    if (applications.length === 0) {
        notificationsContainer.innerHTML = "<p>No notifications available.</p>";
    } else {
        applications.forEach((application, index) => {
            const notificationCard = document.createElement("div");
            notificationCard.className = "notification-card";

            notificationCard.innerHTML = `
                <h3>Application ${index + 1}</h3>
                <p><strong>Surname:</strong> ${application.surname}</p>
                <p><strong>First Name:</strong> ${application.firstname}</p>
                <p><strong>Date of Birth:</strong> ${application.dob}</p>
                <p><strong>Address:</strong> ${application.address}</p>
                <p><strong>State:</strong> ${application.state}</p>
                <p><strong>LGA:</strong> ${application.lga}</p>
                <p><strong>University:</strong> ${application.university}</p>
                <p><strong>Qualification:</strong> ${application.qualification}</p>
                <p><strong>Course of Study:</strong> ${application.course}</p>
                <hr>
            `;

            notificationsContainer.appendChild(notificationCard);
        });
    }
});