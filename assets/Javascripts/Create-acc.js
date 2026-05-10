// 1. Select all necessary elements from the DOM
const registrationForm = document.getElementById('registrationForm');
const emailInput = document.getElementById("inputScEmail");
const roleDisplay = document.getElementById("roleDisplay");
const nameInput = document.getElementById('inputName');
const idNumberInput = document.getElementById('inputIDNumber');
const passInput = document.getElementById('inputPass');
const confirmPassInput = document.getElementById('inputConPass');
const policyCheckbox = document.getElementById('checkbox'); // Ensure id="checkbox" is in your HTML

// === 2. Email Role Detection Logic ===
emailInput.addEventListener("input", function () {
    const email = emailInput.value.toLowerCase();
    
    if (email.includes("@student.wmsu.edu.ph")) {
        roleDisplay.value = "Student";
    } else if (email.includes("@faculty.wmsu.edu.ph")) {
        roleDisplay.value = "Teacher";
    } else if (email.includes("@staff.wmsu.edu.ph")) {
        roleDisplay.value = "Staff";
    } else if (email.includes("@alumni.wmsu.edu.ph")) {
        roleDisplay.value = "Alumni";
    } else {
        roleDisplay.value = ""; // Clear if it doesn't match university domains
    }
});

// === 3. Password Toggle Logic (Eye Icon) ===
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

// === 4. Combined Form Submission Validation ===
registrationForm.addEventListener('submit', function(e) {
    // Stop the page from refreshing immediately
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const idValue = idNumberInput.value.trim();
    const passValue = passInput.value;
    const confirmValue = confirmPassInput.value;

    // --- A. Full Name Validation (Min 3 Parts, No Dots/Numbers) ---
    const nameParts = nameValue.split(/\s+/).filter(part => part.length > 0);
    const nameCharsPattern = /^[a-zA-Z\s]+$/;

    if (!nameCharsPattern.test(nameValue)) {
        alert("Invalid Name! Use letters only. Please do not use dots (.) or numbers.");
        return;
    }
    if (nameParts.length < 3) {
        alert("Incomplete Name! Please provide your Full Name (First, Middle, and Last) without initials.");
        return;
    }

    // --- B. University ID Validation (9 to 10 Digits) ---
    const idPattern = /^\d{9,10}$/; 
    if (!idPattern.test(idValue)) {
        alert("Invalid ID Number! It must be between 9 and 10 digits (Example: 202502829).");
        return;
    }

    // --- C. Role/Email Validation ---
    if (roleDisplay.value === "") {
        alert("Please use a valid WMSU School Email to determine your role.");
        return;
    }

    // --- D. Password Length Validation (Min 8 Characters) ---
    if (passValue.length < 8) {
        alert("Password too short! It must be at least 8 characters long.");
        return;
    }

    // --- E. Password Match Validation ---
    if (passValue !== confirmValue) {
        alert("Passwords do not match!");
        return;
    } 

    // --- F. Policy Checkbox Validation ---
    if (!policyCheckbox || !policyCheckbox.checked) {
        alert("Invalid! You must agree to the Borrowing Policies and Responsibilities to proceed.");
        return;
    } else {
        alert("You may proceed, Goodluck")
    }

    // === FINAL SUCCESS ===
    alert("Account successfully validated!");
    window.location.href = "Signing-page.html";
});

