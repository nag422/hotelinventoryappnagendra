import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() { }
  // this is singleton so any where is the same.
  login(email: string, password: string) {
    if (email === "admin@gmail.com" && password === "Admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === "user@gmail.com" && password === "User") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    else {
      this.isLoggedIn = false;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
