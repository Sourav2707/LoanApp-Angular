import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  isLoggedIn! : boolean;
  baseurl = 'http://localhost:8080/user/';
  token : any;
  constructor(private httpclient : HttpClient) { }
  // loginResponse! : HttpResponse<any>
  // login(payload : any): HttpResponse<any> {
  //   let responseToken;
  //   this.httpclient.post(this.baseurl+'login', payload, {
  //     observe: 'response'
  //   }).subscribe((response : HttpResponse<any>) =>
  //     {
  //       responseToken = response.headers.get('Authorization');
  //       if(responseToken !== null) {
  //         localStorage.setItem('token', responseToken);
  //       }
  //       this.loginResponse = response;
  //     });
  //     console.log(this.loginResponse);
  //     return this.loginResponse;    
  // }

  // login(payload : any): Observable<any> {
  //    return this.httpclient.post(this.baseurl+'login', payload, {
  //       observe: 'response'
  //     })
  //   }
  // async login(payload : any) {
  //  try {
  //   const response = await lastValueFrom(this.httpclient.post(this.baseurl+'login', payload, {
  //     observe: 'response'
  //   }));
  //   this.token = response.headers.get('Authorization');
  //   return response.body;
  //  }
  //  catch(error) {
  //   console.error('Login error ', error);
  //   throw error;
  //  }
  // }
  // loginResponse : any;
  // private subject = new Subject();
  // login(payload: any) : Observable<any> {
  //    this.httpclient.post(this.baseurl+'login', payload, {
  //         observe: 'response'
  //       }).subscribe(response => {
  //         const token = response.headers.get('Authorization');
  //         if(token) {
  //           localStorage.setItem('token', token);
  //         }
  //         this.loginResponse = this.subject.next(response);
  //       })
  //       return this.loginResponse;
  // }
  login(payload : any) : Observable<any> {
    return this.httpclient.post(this.baseurl+'login', payload, {observe : 'response'});
  }
  register(payload: any) : Observable<any> {
    return this.httpclient.post(this.baseurl+'register', payload, {observe : 'response'});
  }
}
  