document.getElementById('ContactForms').addEventListener('submit', function(event) {
    // 1. Get input values
    const mobileNum = document.getElementById('mobileNum').value.trim();
    const contactName = document.getElementById('contactName').value.trim();
    const emergeNum = document.getElementById('emergeNum').value.trim();

    // 2. Regex Patterns
    // Mobile: Must start with 09 and be followed by exactly 9 digits (total 11)
    const phonePattern = /^09\d{9}$/;
    // Name: Should only contain letters and spaces (no numbers)
    const namePattern = /^[a-zA-Z\s,.]+$/;

    // 3. Validation Checks
    
    // Check Mobile Number
    if (!phonePattern.test(mobileNum)) {
        alert("Invalid Mobile Number! It must be 11 digits and start with '09'.");
        event.preventDefault(); // Stop form from submitting
        return;
    }

    // Check Emergency Contact Name (Prevent numbers)
    if (!namePattern.test(contactName)) {
        alert("Invalid Name! The contact name should not contain numbers.");
        event.preventDefault();
        return;
    }

    // Check Emergency Contact Number
    if (!phonePattern.test(emergeNum)) {
        alert("Invalid Emergency Contact Number! It must be 11 digits and start with '09'.");
        event.preventDefault();
        return;
    }

    // If everything passes, the form will proceed to Verification-code.html
    window.location.href = "Verification-code.html";
   
});
