import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-database',
  templateUrl: 'database.html'
})
export class DatabasePage {
  @ViewChild('newItem') newItem;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    db: AngularFireDatabase
  ) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName }).then(_ => {
      this.newItem.value = '';
    });
  }
  
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }

  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }

  deleteEverything() {
    this.itemsRef.remove();
  }
}
