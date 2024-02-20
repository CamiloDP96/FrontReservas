import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl:string) { }

  // GET
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/room/roomList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/room/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/room/updateRoom/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/room/createRoom`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/room/deleteRoom/${id}`);
  }
}
