import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {TicketService} from "../apiServices/ticketService";
import {TicketsCount } from "../models/ticketsCount";
import {Ticket} from "../models/ticket";
import { DataTableModule, SharedModule } from 'primeng/primeng'; 
import { SortMeta, LazyLoadEvent, FilterMetadata } from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ticketsCount: TicketsCount;
  allTickets: Ticket[];
  cols: any[];

  constructor(private ticketService: TicketService) { }
 

  ngOnInit() { 
    this.getcounts();
    this.getTickets("Bug");


  }

  private getcounts() {
    this.ticketService.getTicketsCount()
      .subscribe(t => this.ticketsCount = t);}

  private onStatusClick(ticket: Ticket, status) { 
    ticket.Status = status;
    this.getcounts(); 
  }

  private getTickets(type) {
    this.ticketService.getAllTicketsByType(type)
      .subscribe(t => this.allTickets = t);
  }

}
