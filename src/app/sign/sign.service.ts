import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class SignService {
  public token: string;
  public tokenStatus: boolean;
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
    this.isAuthentificated(this.token);
  }
  isAuthentificated(token) {
    if (token !== undefined) {
      console.log(this.tokenStatus);
      return this.tokenStatus = true;
    } else {
      console.log(this.tokenStatus);
      return this.tokenStatus = false;
    }
  }
}