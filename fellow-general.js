function out() {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    // Get the account button element where the name will be displayed
    const accountButton = document.querySelector(".dropbtn");

    // Retrieve the logged-in fellow's ID or email from localStorage
    const currentUser = localStorage.getItem("currentFellowID");

    if (currentUser) {
        // Display the fellow ID or email on the Account button
        accountButton.innerHTML = `<i class="bi bi-gear"></i> ${currentUser} <i class="bi bi-chevron-down"></i>`;
    } else {
        // Fallback if no user is logged in
        accountButton.innerHTML = `<i class="bi bi-gear"></i> Account <i class="bi bi-chevron-down"></i>`;
    }
});

function out() {
    // Clear current user from localStorage and redirect to login
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
