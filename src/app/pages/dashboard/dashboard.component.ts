import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {TicketService} from "../apiServices/ticketService";
import {TicketsCount } from "../models/ticketsCount";
import {Ticket} from "../models/ticket";
import { DataTableModule, SharedModule } from 'primeng/primeng'; 
import { SortMeta, LazyLoadEvent, FilterMetadata } from 'primeng/primeng';
import {LocalStorageService} from "angular-2-local-storage";
import { Router } from '@angular/router';
import {NotificationService} from "../shared/notificationService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ticketsCount: TicketsCount;
  allTickets: Ticket[];
  cols: any[];

  constructor(private ticketService: TicketService,
    public localStorageService: LocalStorageService,
    public router: Router,
    public notificationService: NotificationService) {

  }
 

  ngOnInit() { 
    //at any request to APi without valid toben , 
    // it shoud throw Exception 401 and MyHttpInterceptor will handle this exception by redirect to login 
    //now we are running at mock api so i added this line 
    if (!this.localStorageService.get('token')) {
      this.router.navigate(['/login']);
    }
    this.getcounts();
    this.getTickets("Bug");


  }

  private getcounts() {
    this.ticketService.getTicketsCount()
      .subscribe(t => this.ticketsCount = t);}

  private onStatusClick(ticket: Ticket, status) {
    ticket.Status = status;
    this.getcounts();

    //Insert
    this.ticketService.updateTicketStatus(ticket).subscribe(
      t => {
        this.notificationService.show(ticket.Subject + " is updated Status to " + status+" Successfully");
      },
      (error: any) => this.notificationService.show(<any>error)
    );
  }

  private getTickets(type) {
    this.ticketService.getAllTicketsByType(type)
      .subscribe(t => this.allTickets = t);
  }

}
