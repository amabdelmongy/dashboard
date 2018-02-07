import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
 
import { NotificationService} from "../shared/notificationService";
import {LoginService} from "../apiServices/loginService"; 
import { LocalStorageService } from "angular-2-local-storage";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  

  constructor(public formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private router: Router) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      UserName: ['', [Validators.required]], 
      Password: ['', [Validators.required]],
    });
  }

  onClickLogin() {
    if (this.form.dirty && this.form.valid) {
      
      //Insert
      this.loginService.login(this.form.value.UserName, this.form.value.Password ).subscribe(
        token => { 
          this.loginSuccesd(token, this.form.value.UserName);
        },
        (error: any) => this.notificationService.show(<any>error)
      );
    } 
  }

  private loginSuccesd(token, userName: string) {
    if ( token) {
      this.localStorageService.set("token", token);
      this.localStorageService.set("username", userName); 
      this.router.navigate(['/']); 
    }

  }

}
