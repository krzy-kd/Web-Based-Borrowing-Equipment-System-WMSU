// Select elements using the correct IDs from HTML
const emailInput = document.getElementById("inputScEmail");
const roleDisplay = document.getElementById("roleDisplay");
const registrationForm = document.getElementById('registrationForm');

// 1. Email Role Detection Logic
emailInput.addEventListener("input", function () {
    const email = emailInput.value.toLowerCase(); // Convert to lowercase for better matching

    if (email.includes("@student.wmsu.edu.ph")) {
        roleDisplay.value = "Student";
    } else if (email.includes("@faculty.wmsu.edu.ph")) {
        roleDisplay.value = "Teacher";
    } else if (email.includes("@staff.wmsu.edu.ph")) {
        roleDisplay.value = "Staff";
    } else if (email.includes("@alumni.wmsu.edu.ph")) {
        roleDisplay.value = "Alumni";
    } else {
        roleDisplay.value = ""; // Clear if invalid
    }
});

// 2. Password Toggle Logic
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        if (input.type === "password") {
            input.type = "text";
            this.textContent = "🔒"; 
        } else {
            input.type = "password";
            this.textContent = "👁";
        }
    });
});

// 3. Form Submission Handling
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pass = document.getElementById('inputPass').value;
    const confirm = document.getElementById('inputConPass').value;
    
    // Check if passwords match
    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    } 

    // Check if a valid university email was used (role is detected)
    if (roleDisplay.value === "") {
        alert("Please use a valid WMSU School Email.");
        return;
    }

    alert("Form submitted successfully!");
    window.location.href = "Signing-page.html";
});