import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {
  user: any;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.user = null;        
        return;
      }
      this.user = user;      
    });
  }

  signIn() {
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}