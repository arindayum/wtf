// users.js
document.addEventListener("DOMContentLoaded", function() {
    // Get user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get the userList table body
    const userList = document.getElementById('userList');

    // Populate the table with user data
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.city}</td> <!-- Adding City data -->
        `;
        userList.appendChild(row);
    });
});
