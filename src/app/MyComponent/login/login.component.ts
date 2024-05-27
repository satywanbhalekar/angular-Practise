import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
console: any;

  constructor(private authService: ServiceService) { }

  // Method to handle login
  login() {
    // Check if username and password are provided
    if (!this.username || !this.password) {
      this.errorMessage = 'Please provide both username and password.';
      return;
    }

    // Call the authentication service to authenticate user
    this.authService.authenticateUser({ username: this.username, password: this.password })
      .subscribe(
        response => {
          // Clear error message if authentication is successful
          this.errorMessage = '';
          // Log success message to the console
          console.log('Login successful');
          // Redirect or perform any other action upon successful authentication
          
        },
        error => {
          // Display error message if authentication fails
          this.errorMessage = 'Authentication failed. Please check your credentials and try again.';
        }
      );
  }
}
