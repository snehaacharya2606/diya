function checkScreenSize() {
    if (window.innerWidth < 1024) {
        document.getElementById("customAlert").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("customAlert").style.display = "none";
}

// Run this function when the page loads
window.onload = checkScreenSize;
