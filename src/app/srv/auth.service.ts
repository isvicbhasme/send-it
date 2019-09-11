import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { escapeRegExp } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private ngFireAuthService: AngularFireAuth) {
    this.ngFireAuthService.auth.onAuthStateChanged(auth => {
      if(auth)
      {
        localStorage.setItem("user", JSON.stringify(auth));
      }
      else
      {
        localStorage.removeItem("user");
      }
    });
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("user") != null;
  }

  logout(): void {
    this.ngFireAuthService.auth.signOut()
    .then()
    .catch()
  }
}
