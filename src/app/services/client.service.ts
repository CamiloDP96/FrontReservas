import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl:string) { }

  // GET
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/client/clientList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/client/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/client/updateClient/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/client/createClient`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/client/delete/${id}`);
  }
}
