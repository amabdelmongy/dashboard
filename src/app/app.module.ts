import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { TableListComponent } from './table-list/table-list.component';
import {TicketService} from "./apiServices/ticketService";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NotificationService} from "./shared/notificationService";
import { LocalStorageModule } from 'angular-2-local-storage';
import {CreateTicketComponent} from "./create-ticket/create-ticket.component";
import {LoginService} from "./apiServices/loginService";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateTicketComponent,
    TableListComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,  
    LocalStorageModule.withConfig({
      prefix: 'Ticket-Web',
      storageType: 'localStorage'
    })
    
  ],
  providers: [TicketService, NotificationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
