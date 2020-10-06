import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import {LoginManagerComponent} from './components/login-manager/login-manager.component';
import {LoginClientComponent} from './components/login-client/login-client.component';
import { ManagerComponent } from './components/manager/manager.component';
import {ClientComponent} from './components/client/client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginClientComponent,
    LoginManagerComponent,
    ClientComponent,
    ManagerComponent,
    UpdateClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
