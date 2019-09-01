import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'

import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;

  title = 'send-it';
  signup: boolean = false;
  signupForm = new FormGroup({
    signupEmail : new FormControl('', Validators.email),
    signupPassword : new FormControl('', Validators.min(5))
  });

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    let uiConfig = {
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };
    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  signupFormSubmit() {
    console.log(this.signupForm.value);
  }
}
