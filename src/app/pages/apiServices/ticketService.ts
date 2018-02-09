import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Rx';
import { TicketsCount   } from "../models/ticketsCount";
import { Ticket } from "../models/ticket";
import { BaseApiService } from './baseAPIService'; 


@Injectable()
export class TicketService extends BaseApiService  {
  private urlTicketsCount = "http://www.mocky.io/v2/5a7b4cc7300000640028be6d"; 
  private urlsaveTicket = "http://www.mocky.io/v2/5a7b4cc7300000640028be6d"; 
  public getTicketsCount(): Observable<TicketsCount> {
    return this._http.get(this.urlTicketsCount)
        .catch(this.handleError);
  } 

  public saveTicket(tiket: Ticket)  {
    return this._http.post(this.urlTicketsCount,  tiket)
      .catch(this.handleError);
  }

  public getAllTicketsByType(type): Observable<Ticket[]> { 
    var url = "http://www.mocky.io/v2/5a7d5dca3100004a00cd083d";
    if (type == "Feature") {
      url = "http://www.mocky.io/v2/5a7d5ce33100004a00cd0838";
    } else if (type == "Other") {
      url = "http://www.mocky.io/v2/5a7d5d783100004900cd083c";
    }  

    return this._http.get(url + "/" + type)
        .catch(this.handleError);
  }

  public updateTicketStatus(tiket: Ticket) {
    return this._http.post(this.urlsaveTicket, tiket)
      .catch(this.handleError);
  }
} 