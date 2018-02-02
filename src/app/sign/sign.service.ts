import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class SignService {
  public token: string;
  signUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      error => (error)
    ).then(
      response => console.log(response)
    );
  }
  getSignToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }
  isAuthentificated() {
    return this.token != null;
  }
}
