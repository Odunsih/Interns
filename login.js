function login(username) {
    // Simulate login
    localStorage.setItem("currentUser", username);

    // Redirect to the fellow profile page
    window.location.href = "fellow-profile.html";
}

function out() {
    // Clear current user and redirect to the login page
    // localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}


function reg(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (!storedUserData) {
        showPopup("No user data found. Please sign up first.");
        return;
    }

    // Get input values from the login form
    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    // Check if entered password matches the stored password
    if (username === storedUserData.fellowID && password === storedUserData.password) {
          // Save the fellow ID in localStorage for the customized page
          localStorage.setItem("currentFellowID", storedUserData.fellowID);
        // If fellow ID matches, redirect to fellow homepage
        window.location.href = "general.html";
    } else if (username === storedUserData.email && password === storedUserData.password) {
        // If email matches, redirect to organization homepage
        window.location.href = "org-gen.html";
    } else {
        // Show error popup if credentials are incorrect
        showPopup("Invalid username or password. Please try again.");
    }
}

function showPopup(message) {
    const popup = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;
    popup.classList.remove("hidden");

    // Set timeout to automatically close the popup after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 2000);
}

function closePopup() {
    const popup = document.getElementById("popupMessage");
    popup.classList.add("hidden");
}