import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import {Ticket} from "../models/ticket";
import {TicketService} from "../apiServices/ticketService";
import { NotificationService } from "../shared/notificationService";  
 

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  Type: string;
  Urgency:string;
  public form: FormGroup;
  ticket: Ticket;
  types: string[] = ["Bug Report", "Feature Request", "Other"];
  urgencies: string[] = ["Low", "Mid", "High"];

  constructor(public formBuilder: FormBuilder,
    private ticketService: TicketService,
    private notificationService: NotificationService ) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Subject: ['', [Validators.required]],
      Message: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      Urgency: ['', [Validators.required]],
    });
  }

  onClickSend() {
    if (this.form.dirty && this.form.valid) {
      var ticketToSave = Object.assign({}, this.ticket, this.form.value);
      //Insert
      this.ticketService.saveTicket(ticketToSave).subscribe(
        t => {
          this.notificationService.show("Saved Successfully");
          
        },
        (error: any) => this.notificationService.show(<any>error)
      );
    } 
  }

 

}
