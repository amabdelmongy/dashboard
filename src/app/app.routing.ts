import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { TableListComponent } from './table-list/table-list.component';
import {CreateTicketComponent} from "./create-ticket/create-ticket.component";

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'create-ticket', component: CreateTicketComponent },
    { path: 'table-list',     component: TableListComponent }, 
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

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
