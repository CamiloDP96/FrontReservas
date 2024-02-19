import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://3.145.131.53:8080/api/v1/client';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clientList/0/10/`);
  }

  obtenerDatoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/${id}`);
  }

  // PUT
  actualizarDato(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateClient/${id}`, datos);
  }

  // POST
  crearDato(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createClient`, datos);
  }

  // DELETE
  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
