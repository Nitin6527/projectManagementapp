import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginClientComponent} from './components/login-client/login-client.component';
import {LoginManagerComponent} from './components/login-manager/login-manager.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {ClientComponent} from './components/client/client.component';
import {ManagerComponent} from './components/manager/manager.component';
import {UpdateClientComponent} from './components/update-client/update-client.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login_manager', component: LoginManagerComponent},
  {path: 'login_client', component: LoginClientComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'client/:id',component:ClientComponent},
  {path: 'manager',component:ManagerComponent},
  {path: 'updateClient/:id',component:UpdateClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
