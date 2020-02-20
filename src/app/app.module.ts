import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { AngularFireModule } from 'angularfire2'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { FirestoreSettingsToken } from 'angularfire2/firestore'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'interviewapp-5b2db'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
