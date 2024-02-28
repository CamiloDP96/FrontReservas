import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Reserv } from '../interfaces/reserv';

@Injectable({
  providedIn: 'root'
})
export class ReservService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private baseUrl:string,
    private authService: AuthenticationService // Inyecta el servicio de autenticación
    ) { }

  // GET
  obtenerDatos(): Observable<Reserv[]> {
    return this.http.get<Reserv[]>(`${this.baseUrl}/reservation/reservationsList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<Reserv[]> {
    return this.http.get<Reserv[]>(`${this.baseUrl}/reservation/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<Reserv[]> {
    return this.http.put<Reserv[]>(`${this.baseUrl}/reservation/updateReserv/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<Reserv[]> {
    return this.http.post<Reserv[]>(`${this.baseUrl}/reservation/createReserv`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<Reserv[]> {
    return this.http.delete<Reserv[]>(`${this.baseUrl}/reservation/deleteReserv/${id}`);
  }
}
