import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // Indicate that this component is standalone
  templateUrl: './app.component.html', // Link to the HTML template
  styleUrls: ['./app.component.css'], // Link to the CSS styles (if any)
  imports: [FormsModule, CommonModule] // Include FormsModule and CommonModule here
})
export class AppComponent {
  // User registration data
  registerData: User = { username: '', password: '' };
  
  // Array to hold registered users
  registeredUsers: User[] = [];

  // Function to register a user
  registerUser() {
    if (this.registerData.username && this.registerData.password) {
      console.log('User registered:', this.registerData);
      // Push the registered user data into the array
      this.registeredUsers.push({ ...this.registerData });
      this.resetRegisterForm(); // Reset the registration form after submission
    }
  }

  // Function to reset the registration form
  resetRegisterForm() {
    this.registerData = { username: '', password: '' }; // Clear registration data
  }
}
