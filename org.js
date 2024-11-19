function sign() {
    window.location.href = "index.html";
}

document.getElementById("reg").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Collect form data
    const orgName = document.getElementById("org-name").value;
    const pocName = document.getElementById("org-name").value; // Point of Contact Name
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const orgType = document.getElementById("Organization_Type").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      showPopup("Passwords do not match.");
      return;
    }
  
    // Create user object to store in localStorage
    const userData = {
      orgName,
      pocName,
      email,
      phone,
      orgType,
      password,
    };
  
    // Save user data to localStorage, using the email as a key to prevent duplicate entries
    // const storedUser = localStorage.getItem(email);
    // if (storedUser) {
    //   showPopup("User with this email already exists.");
    //   return;
    // } else {
      localStorage.setItem("userData", JSON.stringify(userData));

      showPopup("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page after sign-up
    }
  );

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
  

