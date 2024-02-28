import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../interfaces/room';
import { token } from '../api.config';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService, // Inyecta el servicio de autenticación
    @Inject('API_URL') private baseUrl: string
  ) { }

  // GET
  obtenerDatos(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/room/roomList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/room/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<Room[]> {
    return this.http.put<Room[]>(`${this.baseUrl}/room/updateRoom/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<Room[]> {
    return this.http.post<Room[]>(`${this.baseUrl}/room/createRoom`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<Room[]> {
    return this.http.delete<Room[]>(`${this.baseUrl}/room/deleteRoom/${id}`);
  }
}
