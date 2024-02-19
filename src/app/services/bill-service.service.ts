import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  private apiUrl = 'http://3.145.131.53:8080/api/v1/Bill';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/billsList/0/10/`);
  }

  obtenerDatoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // PUT
  actualizarDato(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateBill/${id}`, datos);
  }

  // POST
  crearDato(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createBill`, datos);
  }

  // DELETE
  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteBill/${id}`);
  }
}
