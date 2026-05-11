const passInput = document.getElementById('inputPass');
const passValue = passInput.value;


    registrationForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    if (passValue.length < 8) {
        alert("Incorrect Password., Pls try again");
        return;
    }


    alert("Account successfully Login!");
    window.location.href = "home-page.html";

    });