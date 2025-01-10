function darkMode() {
    document.documentElement.classList.toggle("dark");
}

// Responsive Design

var displayDimension = window.innerWidth;
setInterval(checkWidth, 75);

function checkWidth() {
    document.getElementById("searchIcon").style.marginLeft = displayDimension - 80 + "px";
    document.getElementById("switchTheme").style.marginLeft = displayDimension - 136 + "px";


    if (window.innerWidth !== displayDimension) {
        displayDimension = window.innerWidth;
    }
    console.log(displayDimension)
}