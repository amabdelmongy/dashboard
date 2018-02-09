import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser'; 

import { DashboardComponent } from './dashboard/dashboard.component';  
import {CreateTicketComponent} from "./create-ticket/create-ticket.component";
import {LoginComponent} from "./login/login.component";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes =[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create-ticket', component: CreateTicketComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
