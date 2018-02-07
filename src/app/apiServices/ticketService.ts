import { Injectable } from '@angular/core'; 
import { BaseApiService } from './BaseAPIService';  
import { Observable } from 'rxjs/Rx';
import { TicketsCount   } from "../models/ticketsCount";
import {Ticket} from "../models/ticket";


@Injectable()
export class TicketService extends BaseApiService {
  private urlTicketsCount =   "http://www.mocky.io/v2/5a7a6d582e00000d2f9a5dea"; 
  private urlsaveTicket ="https://requestb.in/1b4fu2v1";
  public getTicketsCount(): Observable<TicketsCount> {
    return this._http.get(this.urlTicketsCount)
        .catch(this.handleError);
  } 

  public saveTicket(tiket: Ticket)  {
    return this._http.post(this.urlTicketsCount,  tiket)
      .catch(this.handleError);
  } 
} 