import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Credentials } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl:string) { }

  login(body: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authentication`, body);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
