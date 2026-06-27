// Button interaction
function changeText() {
    document.getElementById("demo").innerHTML = "Button Clicked!";
}

// Form Validation + Event Handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("error").innerHTML = "All fields are required!";
    } else {
        document.getElementById("error").innerHTML = "Form submitted successfully!";
    }
});

// Mouse Event
document.querySelector("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "darkblue";
});

document.querySelector("header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#333";
});