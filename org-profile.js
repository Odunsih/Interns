function out() {
    // Clear the current user and redirect to login
    localStorage.removeItem("currentFellowID");
    window.location.href = "login.html";
}