import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {  routing } from './app.routing'; 

import { AppComponent } from './app.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LocalStorageModule } from 'angular-2-local-storage'; 
import { DataTableModule, SharedModule } from 'primeng/primeng';  
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListModule } from 'primeng/components/datalist/datalist'; 
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import {MyHttpInterceptor} from "./pages/shared/httpinterceptor"; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule , 
    RouterModule, 
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
    DropdownModule,
    routing     
    
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
