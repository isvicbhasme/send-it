import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { SettingsComponent } from './settings/settings.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AuthService } from './srv/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateMessageComponent } from './home/create-message/create-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DevicesComponent,
    SettingsComponent,
    LogoutComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireAuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
