import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArxFOKE_MMkXNx0XI0LqwkBVX4RFxcwSk',
      authDomain: 'rademadecode-4ccd0.firebaseapp.com'
    });
  }
}
