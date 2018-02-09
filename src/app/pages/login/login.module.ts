import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {LoginService} from "../apiServices/loginService";
import {NotificationService} from "../shared/notificationService";

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService,
    NotificationService
  ]
})

export class LoginModule { }
