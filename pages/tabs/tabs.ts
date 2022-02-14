import { Component } from '@angular/core';
import { AuthPage } from '../auth/auth';
import { DatabasePage } from '../database/database';
import { FirestorePage } from '../firestore/firestore';
import { StoragePage } from '../storage/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AuthPage;
  tab2Root = DatabasePage;
  tab3Root = FirestorePage;
  tab4Root = StoragePage;

  constructor() {

  }
}
