import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'send-it';
  currentPage: string = 'Message board';
  showTitle: boolean = true;

  constructor(private router: Router) {

  }
  
}
