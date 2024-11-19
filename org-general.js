function out() {
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