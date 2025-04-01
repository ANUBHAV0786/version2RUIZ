import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signup() {
    try {
      await this.authService.signup(this.email, this.password);
      this.router.navigate(['/dashboard']); // Redirect after signup
    } catch (error) {
      this.errorMessage = "Signup failed. Try again.";
    }
  }

  async googleSignup() {
    try {
      await this.authService.googleSignIn();
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = "Google signup failed";
    }
  }
}
