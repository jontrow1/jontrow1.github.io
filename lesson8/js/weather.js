function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}

const options = {month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);

var date = new Date();
if (date.getDay() == 5) {
    document.getElementById("banner").style.display="block";
}

WebFont.load({
    google: {
      families: [
         'Merriweather',
         'Work Sans'
      ]
    }
});