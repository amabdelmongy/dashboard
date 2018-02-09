 import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
 
import { ComponentsModule } from './components/components.module';
 

import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketService } from "./apiServices/ticketService";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from "./shared/notificationService"; 
import { CreateTicketComponent } from "./create-ticket/create-ticket.component"; 
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListModule } from 'primeng/components/datalist/datalist';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';   
import {PagesComponent} from "./pages.component";
 import {routing} from "./pages.routing";
import { CommonModule } from '@angular/common';
 
 @NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    CreateTicketComponent 

  ],
  imports: [  
    FormsModule, 
    routing,   
   
    DataTableModule,
    SharedModule, 
    DataListModule,
    DropdownModule, ComponentsModule ,
    CommonModule,
    ReactiveFormsModule, RouterModule 

  ],
  providers: [TicketService, NotificationService   
    ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
