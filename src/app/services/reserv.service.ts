import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservService {

  private apiUrl = 'http://3.145.131.53:8080/api/v1/reservation';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reservationsList/0/10/`);
  }

  obtenerDatoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // PUT
  actualizarDato(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateReserv/${id}`, datos);
  }

  // POST
  crearDato(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createReserv`, datos);
  }

  // DELETE
  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteReserv/${id}`);
  }
}
