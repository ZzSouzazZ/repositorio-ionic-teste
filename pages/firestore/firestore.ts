import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-firestore',
  templateUrl: 'firestore.html'
})
export class FirestorePage {
  travelers: Observable<any[]>;
  
  constructor(
    public navCtrl: NavController,
    db: AngularFirestore
  ) {
    this.travelers = db.collection('travelers').valueChanges();
  }
}