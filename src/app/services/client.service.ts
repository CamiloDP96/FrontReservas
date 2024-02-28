import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl:string) { }

  // GET
  obtenerDatos(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/client/clientList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/client/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<Client[]> {
    return this.http.put<Client[]>(`${this.baseUrl}/client/updateClient/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<Client[]> {
    return this.http.post<Client[]>(`${this.baseUrl}/client/createClient`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<Client[]> {
    return this.http.delete<Client[]>(`${this.baseUrl}/client/delete/${id}`);
  }
}
