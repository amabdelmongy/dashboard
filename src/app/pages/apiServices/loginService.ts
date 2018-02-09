import { Injectable } from '@angular/core';   
import { Observable } from 'rxjs/Rx'; 
import { BaseApiService } from './baseAPIService'; 

@Injectable()
export class LoginService extends BaseApiService {
  private url = "http://www.mocky.io/v2/5a7b36d3300000640028be14";

  public login(userName: string, password: string): Observable<string> {
    return this._http.get(this.url + "/" + userName + "/" + password , {
      responseType: 'text',
    })
      .catch(this.handleError);
  }


}