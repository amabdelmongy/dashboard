import { Injectable } from '@angular/core'; 
import { BaseApiService } from './BaseAPIService';  
import { Observable } from 'rxjs/Rx';
import { TicketsCount   } from "../models/ticketsCount";
import {Ticket} from "../models/ticket";


@Injectable()
export class TicketService extends BaseApiService {
  private urlTicketsCount =   "http://www.mocky.io/v2/5a7b4cc7300000640028be6d"; 
  private urlsaveTicket = "https://requestb.in/1b4fu2v1";
  private urlAllTickets ="http://www.mocky.io/v2/5a7c58672e00006b000528c9";
  public getTicketsCount(): Observable<TicketsCount> {
    return this._http.get(this.urlTicketsCount)
        .catch(this.handleError);
  } 

  public saveTicket(tiket: Ticket)  {
    return this._http.post(this.urlTicketsCount,  tiket)
      .catch(this.handleError);
  }

  public getAllTicketsByType(type): Observable<Ticket[]>  {
    return this._http.get(this.urlAllTickets +"/" + type )
      .catch(this.handleError); }

} 