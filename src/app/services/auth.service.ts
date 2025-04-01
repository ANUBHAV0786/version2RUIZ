import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Register User
  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }

  // Login User
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  // Google Sign-In
  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      throw error;
    }
  }

  // Logout
  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  }
  // ✅ Fix: Add signup method
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  // Checking if user is logged in
  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
  
}
