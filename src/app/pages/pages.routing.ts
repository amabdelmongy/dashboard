   
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTicketComponent } from "./create-ticket/create-ticket.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from 'app/pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent  
      },
      {
        path: 'create-ticket',
        component: CreateTicketComponent
      }, { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
 
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

 
 