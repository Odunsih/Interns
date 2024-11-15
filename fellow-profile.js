function out() {
    // Redirect to the login page
    window.location.href = "login.html";
}

// Event listener for the "Edit Profile" button
document.getElementById("editProfile").addEventListener("click", () => {
    const profileData = {
        name: document.getElementById("fellowName").textContent,
        location: document.getElementById("fellowLocation").textContent.split(" . ")[0],
        about: document.querySelector(".about p").textContent,
        education: document.querySelector("#edu h4").textContent,
        certification: document.querySelector("#cert h4").textContent,
        skills: document.querySelector("#skill h4").textContent,
    };

    // Save the current profile data to localStorage for use in the edit profile page
    localStorage.setItem("editProfileData", JSON.stringify(profileData));

    // Redirect to the edit profile page
    window.location.href = "edit-profile.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const profileData = JSON.parse(localStorage.getItem("fellowProfile"));

    if (profileData) {
        // Update profile data on the fellow profile page
        document.getElementById("fellowName").textContent = profileData.name || "Full Name";
        document.getElementById("fellowLocation").textContent = `${profileData.location || "Location"} .`;
        document.querySelector(".about p").textContent = profileData.about || "About yourself here...";
        document.querySelector("#edu h4").textContent = profileData.education || "Education details";

        // Update the profile picture if available
        if (profileData.profilePicture) {
            document.getElementById("profilePic").src = profileData.profilePicture;
        }

        // Handle the portfolio button click event
        const portfolioButton = document.getElementById("portfolio");
        if (profileData.portfolio) {
            portfolioButton.addEventListener("click", () => {
                window.open(profileData.portfolio, "_blank");
            });
        } else {
            portfolioButton.disabled = true;
            portfolioButton.textContent = "No portfolio available";
        }

        // Handle the show credentials button click event
        document.getElementById("showCredentials").addEventListener("click", () => {
            const certContainer = document.createElement("div");
            certContainer.id = "certificateList";

            profileData.certificates?.forEach((cert) => {
                const certLink = document.createElement("a");
                certLink.href = cert.url;
                certLink.target = "_blank";
                certLink.textContent = cert.name;
                certContainer.appendChild(certLink);
                certContainer.appendChild(document.createElement("br"));
            });

            // Replace the "Show credential" button with the certificate list
            const certDiv = document.getElementById("cert");
            const showCredentialsButton = document.getElementById("showCredentials");
            certDiv.replaceChild(certContainer, showCredentialsButton);
        });
    } else {
        console.error("No profile data found in localStorage.");
    }
});








// /###########################/
document.addEventListener("DOMContentLoaded", () => {
    // const currentUser = localStorage.getItem("currentUser");

    // if (!currentUser) {
    //     // Redirect to login if no user is logged in
    //     window.location.href = "login.html";
    //     return;
    // }

    // Retrieve the user's profile data
    const profileData = JSON.parse(localStorage.getItem(`profile_${currentUser}`)) || {};

    // Update the profile with the user's data
    document.getElementById("fellowName").textContent = profileData.name || "Full Name";
    document.getElementById("fellowLocation").textContent = `${profileData.location || "Location"} .`;
    document.querySelector(".about p").textContent = profileData.about || "About yourself here...";
    document.querySelector("#edu h4").textContent = profileData.education || "Education details";

    if (profileData.profilePicture) {
        document.getElementById("profilePic").src = profileData.profilePicture;
    }

    // Handle portfolio button
    const portfolioButton = document.getElementById("portfolio");
    if (profileData.portfolio) {
        portfolioButton.addEventListener("click", () => {
            window.open(profileData.portfolio, "_blank");
        });
    } else {
        portfolioButton.disabled = true;
        portfolioButton.textContent = "No portfolio available";
    }

    // Show credentials button
    document.getElementById("showCredentials").addEventListener("click", () => {
        const certContainer = document.createElement("div");
        certContainer.id = "certificateList";

        profileData.certificates?.forEach((cert) => {
            const certLink = document.createElement("a");
            certLink.href = cert.url;
            certLink.target = "_blank";
            certLink.textContent = cert.name;
            certContainer.appendChild(certLink);
            certContainer.appendChild(document.createElement("br"));
        });

        const certDiv = document.getElementById("cert");
        certDiv.replaceChild(certContainer, document.getElementById("showCredentials"));
    });
});
