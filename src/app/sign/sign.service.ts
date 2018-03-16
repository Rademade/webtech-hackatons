import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class SignService {
  public token: string;
  signUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      (error) => console.log(error)
    ).then(
      (response) => console.log(response)
    );
  }
  getCurrentUserToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
  }
  isAuthenticated() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        return false;
    });
  }
}
