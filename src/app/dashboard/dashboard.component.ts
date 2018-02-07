import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {TicketService} from "../apiServices/ticketService";
import {TicketsCount } from "../models/ticketsCount";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ticketsCount: TicketsCount;

  constructor(private ticketService: TicketService) { }
 

 

  ngOnInit() {
 

    this.ticketService.getTicketsCount()
      .subscribe(t => this.ticketsCount = t);

       
  }

}
