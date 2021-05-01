const register = event => {
    event.preventDefault();

    //username
    let userName = document.getElementById('username').value;
    if ((userName.length < 3 || userName.length > 20) || userName == ""){
        document.getElementById("usernameError").style.display='block';
        document.getElementById('username').style.border = "2px solid #b0706d";
    }

    //password
    let password = document.getElementById('password').value;
    if (password == ""){
        document.getElementById("passwordError").style.display='block';
        document.getElementById('password').style.border = "2px solid #b0706d";
    }

    //phone
    let phone = document.getElementById('phone').value;
    const phoneRegex = /^\d+$/;
    const isValidPhone = phoneRegex.test(phone);
    if (phone == "" || !isValidPhone){
        document.getElementById("phoneError").style.display='block';
        document.getElementById('phone').style.border = "2px solid #b0706d";
    }

    //email
    let email = document.getElementById('email').value;
    const regexEmail = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+[.][a-z]+$/;
    const isValidEmail = regexEmail.test(email);
    if (email == "" || !isValidEmail){
        document.getElementById("emailError").style.display='block';
        document.getElementById('email').style.border = "2px solid #b0706d";
    }

    //apartmentNum
    let apartmentNum = document.getElementById('apartmentNum').value;
    const regexApart = /^\d+$/;
    const isValidApartment = regexApart.test(apartmentNum);
    if (!isValidApartment || apartmentNum == "") {
        document.getElementById("apartmentNumError").style.display='block';
        document.getElementById('apartmentNum').style.border = "2px solid #b0706d";
    }
}

(function(){
    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', register);
})();