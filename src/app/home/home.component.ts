import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Home"
  @Output() pageTitle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
