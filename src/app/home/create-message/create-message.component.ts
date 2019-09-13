import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  createForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm = new FormGroup({});
  }

}
