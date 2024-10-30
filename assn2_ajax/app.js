// Function to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Push to local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Send data to server using AJAX POST
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/register", true); // Use a valid endpoint here
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('User registered successfully');
        }
    };
    xhr.send(JSON.stringify(user));

    // Clear the form
    document.getElementById('registrationForm').reset();
});
