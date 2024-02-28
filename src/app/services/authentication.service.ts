import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Credentials } from '../api.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
  private http: HttpClient,
  @Inject('API_URL') private baseUrl:string,
  private router: Router
  ) { }

  // login(body: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/auth/authentication`, body);
  // }
  login(body: any): Observable<any> {
    console.log("credenciales: ", body);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/auth/authentication`, body, { headers: headers, responseType: 'text' })
      .pipe(
        tap((token: string) => {
          localStorage.setItem('token', token);
          this.router.navigate(['/home/']);
        })
      )
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
  getToken(){
    return localStorage.getItem('token');
  }

}