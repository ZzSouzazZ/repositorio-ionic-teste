import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { environment } from '../enviroments/enviroment';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { DatabasePage } from '../pages/database/database';
import { FirestorePage } from '../pages/firestore/firestore';
import { StoragePage } from '../pages/storage/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AuthPage,
    DatabasePage,
    FirestorePage,
    StoragePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AuthPage,
    DatabasePage,
    FirestorePage,
    StoragePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
