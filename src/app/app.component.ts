import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_LINKS } from './const/nav-links';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './srv/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = {}

  constructor(private router: Router, private authService: AuthService) {
    this.navLinks = NAVIGATION_LINKS
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
