import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';  
import {TicketService} from "./apiServices/ticketService"; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NotificationService} from "./shared/notificationService";
import { LocalStorageModule } from 'angular-2-local-storage';
import {CreateTicketComponent} from "./create-ticket/create-ticket.component";
import {LoginService} from "./apiServices/loginService";
import {LoginComponent} from "./login/login.component"; 
import { DataTableModule, SharedModule } from 'primeng/primeng';  
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListModule } from 'primeng/components/datalist/datalist'; 
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import {MyHttpInterceptor} from "./shared/httpinterceptor"; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateTicketComponent, 
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
    }),
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule,
    DataListModule,
    DropdownModule
    
  ],
  providers: [TicketService, NotificationService, LoginService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
