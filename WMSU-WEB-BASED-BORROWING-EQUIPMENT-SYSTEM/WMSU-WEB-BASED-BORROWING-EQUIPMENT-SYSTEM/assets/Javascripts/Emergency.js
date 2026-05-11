document.getElementById('ContactForms').addEventListener('submit', function(event) {
    const mobileNum = document.getElementById('mobileNum').value.trim();
    const contactName = document.getElementById('contactName').value.trim();
    const emergeNum = document.getElementById('emergeNum').value.trim();

    const phonePattern = /^09\d{9}$/;
    // Letters and spaces only (Dots and numbers are blocked)
    const nameCharsPattern = /^[a-zA-Z\s]+$/;

    // 1. Mobile Number Validation
    if (!phonePattern.test(mobileNum)) {
        alert("Invalid Mobile Number! It must start with '09' and have 11 digits.");
        event.preventDefault(); 
        return;
    }

    // 2. Character Validation (No dots/initials)
    if (!nameCharsPattern.test(contactName)) {
        alert("Invalid Name! Please enter the full names using letters only (no dots or initials).");
        event.preventDefault();
        return;
    }

    // 3. Name Part Validation
    const nameParts = contactName.split(/\s+/).filter(part => part.length > 0);

    if (nameParts.length < 3) {
        // This handles "Lebron" (1 part) or "Lebron James" (2 parts)
        event.preventDefault();
        if (nameParts.length === 1) {
            alert("Incomplete Name! Please include your Middle Name and Surname.");
        } else {
            alert("Missing Name Part! We need the First, Middle, and Surname. (e.g., Lebron James Arturo Micabalo)");
        }
        return;
    }

    // 4. Emergency Contact Number Validation
    if (!phonePattern.test(emergeNum)) {
        alert("Invalid Emergency Number! It must start with '09' and have 11 digits.");
        event.preventDefault();
        return;
    }

    // Success - browser proceeds to Verification-code.html
});