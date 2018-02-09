import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
 import { Router } from '@angular/router'; 
import { LocalStorageService } from "angular-2-local-storage";
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private localStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authReq = req;
    if (this.localStorageService && this.localStorageService.get("token")) {  
      // Clone the request to add the new header.
        authReq = req.clone(
        {
          headers:
             req.headers.append('Authorization', 'Bearer ' + this.localStorageService.get("token").toString())
        }
      );
    }
    //send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
        return this.handleError(error);
      }) as any;

  }

  public get router(): Router { //this creates router property on your service.
    return this.injector.get(Router);
  }

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
    if (err.status == 401) { 
       this.router.navigate(['/login']);
    } 
    return Observable.throw(errorMessage);
  }

  
}
