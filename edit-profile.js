document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("editProfileForm");

    // Load existing profile data if available
    const profileData = JSON.parse(localStorage.getItem("fellowProfile")) || {};
    document.getElementById("name").value = profileData.name || "";
    document.getElementById("location").value = profileData.location || "";
    document.getElementById("about").value = profileData.about || "";
    document.getElementById("education").value = profileData.education || "";
    document.getElementById("portfolioLink").value = profileData.portfolio || "";

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;
        const about = document.getElementById("about").value;
        const education = document.getElementById("education").value;
        const portfolio = document.getElementById("portfolioLink").value;

        // Convert profile picture to base64
        const profilePictureFile = document.getElementById("profilePicture").files[0];
        const profilePicture = profilePictureFile ? await toBase64(profilePictureFile) : profileData.profilePicture;

        // Handle certificate uploads
        const certificates = profileData.certificates || [];
        Array.from(document.getElementById("certificates").files).forEach((file) => {
            if (file.type === "application/pdf") {
                certificates.push({ name: file.name, url: URL.createObjectURL(file) });
            }
        });

        // Update localStorage
        const updatedProfile = { name, location, about, education, portfolio, profilePicture, certificates };
        localStorage.setItem("fellowProfile", JSON.stringify(updatedProfile));

        // Redirect back to profile page
        window.location.href = "fellow-profile.html";
    });

    // Utility function to convert file to base64
    function toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const editProfileData = JSON.parse(localStorage.getItem("editProfileData")) || {};

    // Pre-fill form fields with existing data
    document.getElementById("name").value = editProfileData.name || "";
    document.getElementById("location").value = editProfileData.location || "";
    document.getElementById("about").value = editProfileData.about || "";
    document.getElementById("education").value = editProfileData.education || "";
    document.getElementById("portfolioLink").value = editProfileData.portfolio || "";

    // Save updated data on form submission
    document.getElementById("saveProfileForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const updatedProfile = {
            name: document.getElementById("name").value,
            location: document.getElementById("location").value,
            about: document.getElementById("about").value,
            education: document.getElementById("education").value,
            portfolio: document.getElementById("portfolioLink").value,
        };

        saveProfile(updatedProfile);
    });
});

function saveProfile(profileData) {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        console.error("No user is currently logged in.");
        return;
    }

    // Save user-specific profile data
    localStorage.setItem(`profile_${currentUser}`, JSON.stringify(profileData));
    alert("Profile updated successfully!");
    window.location.href = "fellow-profile.html";
}

