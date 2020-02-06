function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}

const options = {month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);