import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_LINKS } from './const/nav-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  navLinks = {}

  constructor(private router: Router) {
    this.navLinks = NAVIGATION_LINKS
  }
}
