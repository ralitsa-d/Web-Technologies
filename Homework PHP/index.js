function ajax1(url, settings) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            settings.success(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }

    xhr.open(settings.method || 'GET', url, true);
    xhr.send(settings.data || null);
}

const ajax = (url, settings, successUrl) => {
    fetch(url, settings)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => load(data, successUrl))
        .catch(error => console.log(error));
};

const load = (data, url) => {
    if(data.success) {
        window.location = url;
    } else {
        const errors = document.getElementsByClassName('error');
        errors[0].innerHTML = data.error;
    }
};


const register = event => {
    event.preventDefault();

    let errorsArray = [];

    //Username
    let userName = document.getElementById('username').value;
    if((userName.length < 3 || userName > 10) && userName != ""){
        errorsArray.push("Невалидно потребителско име - то трябва да е между 3 и 10 символа");
        
    }
    if(userName == ""){
        errorsArray.push("Невалидно потребителско име");
    }

    //First name
    let name = document.getElementById('name').value;
    if(name == ""){
        errorsArray.push("Невалидно име");
    }
    else if(name.length > 50){
        errorsArray.push("Невалидно име - трябва да е по-малко от 50 символа");
    }

    //Last name
    let family_name = document.getElementById('family-name').value;
    if(family_name == ""){
        errorsArray.push("Невалидна фамилия");
    }
    else if(family_name.length > 50){
        errorsArray.push("Невалидна фамилия - трябва да е по-малко от 50 символа");
    }

    //Email
    let email = document.getElementById('email').value;
    if(email == ""){
        errorsArray.push("Невалиден имейл");
    }
    const regexEmail = /^[a-zA-Z-_0-9]*@[a-z]*.[a-z]*$/;
    const isValidEmail = regexEmail.test(email);
    if(isValidEmail == false && email != ""){
        errorsArray.push("Невалиден имейл");
    }

    //Password
    let password = document.getElementById('password').value;
    if(password == ""){
        errorsArray.push("Невалидна парола");
    }
    else if(password.length < 6 || password.length > 10){
        errorsArray.push("Невалидна парола - тя трябва да е между 6 и 10 символа");
    }
    else if(password.toUpperCase() == password || password.toLowerCase() == password || /\d/.test(password) == false){
        errorsArray.push("Невалидна парола - тя трябва да съдържа главни и малки букви, както и числа");
    }

    //Street
    let street = document.getElementById('street').value;

    //City
    let city = document.getElementById('city').value;

    //Postal code
    let postal_code = document.getElementById('postal-code').value;
    const regexPostalCode = /^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
    const isValidPostalCode = regexPostalCode.test(postal_code);
    if(isValidPostalCode == false && postal_code != ""){
        errorsArray.push("Невалиден пощенски код");
    }

    if(errorsArray.length > 0){
        document.getElementsByClassName('error')[0].innerText = errorsArray.join("! ") + "!";
        document.getElementById('success').innerText = "";
    }
    else{
        const user = {
            Username: userName,
            FirstName: name,
            LastName: family_name,
            Email: email, 
            Password: password,
            Address: {
                Street: street,
                City: city,
                PostalCode: postal_code
            }
        };

        var isUserIn = false;
        var objects;
        var callback = function(text) {
            objects = JSON.parse(text);
            for(var i=0; i<objects.length; i++){
                if(objects[i]["name"] == user["FirstName"] + " " + user["LastName"] &&
                    objects[i]["username"] == user["Username"] &&
                    objects[i]["email"] == user["Email"] &&
                    objects[i]["address"]["street"] == user["Address"]["Street"] &&
                    objects[i]["address"]["city"] == user["Address"]["City"] &&
                    objects[i]["address"]["zipcode"] == user["Address"]["PostalCode"]){
                        isUserIn = true;
                        document.getElementsByClassName('error')[0].innerText = "Въведеният потребител вече съществува!";
                        document.getElementById('success').innerText = "";
                }
            }
        };
        ajax1('https://jsonplaceholder.typicode.com/users', { success: callback });

        if(isUserIn == false){
            document.getElementById("success").innerText = "Успешна регистрация!"
            document.getElementsByClassName('error')[0].innerText = "";
            const settings = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: `data=${JSON.stringify(user)}`
            };
        
            ajax('https://jsonplaceholder.typicode.com/users', settings, 'index.html');
        }
        


        document.getElementById('username').value = "";
        document.getElementById('name').value = "";
        document.getElementById('family-name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('street').value = "";
        document.getElementById('city').value = "";
        document.getElementById('postal-code').value = "";
    }
};

(function() {
    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', register);

    //var url = 'https://jsonplaceholder.typicode.com/users';
    // var logs;
    // var callback = function(text) {
    //     logs = text;
    //     console.log(logs);
    // };
    // ajax1('https://jsonplaceholder.typicode.com/users', { success: callback });
    //ajax1('https://jsonplaceholder.typicode.com/users', { success: text => console.log(text) });

})();

