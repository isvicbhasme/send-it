import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup: boolean = false;
  signupForm = new FormGroup({
    signupEmail : new FormControl('', Validators.email),
    signupPassword : new FormControl('', Validators.min(5))
  });

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signupFormSubmit() {
    console.log(this.signupForm.value);
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.signupForm.get("signupEmail").value,
      this.signupForm.get("signupPassword").value
    )
    .then(value => {
      //success
      console.log('Success!', value);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }

}
