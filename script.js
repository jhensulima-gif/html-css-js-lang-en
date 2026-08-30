// Grab the button element from the HTML DOM
const button = document.getElementById('actionButton');

// Add a click event listener to execute logic when clicked
button.addEventListener('click', () => {
    // Generate a random background color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    // Dynamically update the body background color inline
    document.body.style.backgroundColor = "#" + randomColor;
    
    // Toggle a localized text alert or confirmation message
    button.textContent = "Color Changed!";
    setTimeout(() => {
        button.textContent = "Click Me";
    }, 1000);
});

