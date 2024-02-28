import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Bill } from '../interfaces/bill';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private baseUrl:string,
    private authService: AuthenticationService // Inyecta el servicio de autenticación
    ) { }

  // GET
  obtenerDatos(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.baseUrl}/Bill/billsList/0/10`);
  }

  obtenerDatoPorId(id: number): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.baseUrl}/Bill/${id}`);
  }

  // PUT
  actualizarDato(id: number, data: any): Observable<Bill[]> {
    return this.http.put<Bill[]>(`${this.baseUrl}/Bill/updateBill/${id}`, data);
  }

  // POST
  crearDato(data: any): Observable<Bill[]> {
    return this.http.post<Bill[]>(`${this.baseUrl}/Bill/createBill`, data);
  }

  // DELETE
  eliminarDato(id: number): Observable<Bill[]> {
    return this.http.delete<Bill[]>(`${this.baseUrl}/Bill/deleteBill/${id}`);
  }
}
