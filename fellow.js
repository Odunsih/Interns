function sign() {
    window.location.href = "index.html";
}

function reg(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const fellowID = document.getElementById("fellowID").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        showPopup("Passwords do not match.");
        return;
    }

    // Store user data in local storage
    const userData = {
        fellowID: fellowID,
        email: email,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Show a confirmation popup
    showPopup("Registration successful!");

    // Optional: Redirect to a different page after a few seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000); // Redirect after 3 seconds
}

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
