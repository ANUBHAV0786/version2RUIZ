import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private auth: Auth, private router: Router) {}

  // Login with Email & Password
  loginWithEmail() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        this.router.navigate(['/dashboard']); // Redirect after login
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  // Login with Google
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log("Google login successful:", result.user);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });
  }
}
