import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http'; 
import { Http ,  Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class BaseApiService {
   

  constructor(public _http: HttpClient  ) {
 
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*'  
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  headers: Headers;
  options: RequestOptions;

  public handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  protected  getJsonAsString(data) {
    return JSON.stringify(data);
  }

   
 
}
