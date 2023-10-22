import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice : HttpService) { }

  // login(payload: any): Observable<HttpResponse<any>> {
  //   return this.httpservice.login(payload);
  // }
  // login(payload : any) {
  //   return this.httpservice.login(payload);
  // }

  login(payload: any): Observable<any> {
      return this.httpservice.login(payload);
    }
  register(payload : any) : Observable<any> {
    return this.httpservice.register(payload);
  }
}
