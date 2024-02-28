import { Component, OnInit } from '@angular/core';
import { BillServiceService } from '../services/bill-service.service';
import { ReservService } from '../services/reserv.service';
import { RoomService } from '../services/room.service';
import { Bill } from '../interfaces/bill';
import { Room } from '../interfaces/room';
import { Reserv } from '../interfaces/reserv';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-reserv-detail',
  templateUrl: './reserv-detail.component.html',
  styleUrls: ['./reserv-detail.component.css']
})
export class ReservDetailComponent implements OnInit {
  dataBill: Bill[] = [];
  dataRoom: Room[] = [];
  dataReserv: Reserv[] = [];

  constructor(
    private billService: BillServiceService,
    private roomService: RoomService,
    private reservService: ReservService,
  ) { }

  ngOnInit(): void {
    // Obtener datos de las facturas
    this.billService.obtenerDatos().subscribe((data: Bill[]) => {
      this.dataBill = data;
    });

    // Obtener datos de las habitaciones
    this.roomService.obtenerDatos().subscribe((data: Room[]) => {
      this.dataRoom = data;
    });

    // Obtener datos de las reservas
    this.reservService.obtenerDatos().subscribe((data: Reserv[]) => {
      this.dataReserv = data;
    });
  }

  getImagePath(type: string): string {
    switch (type) {
      case 'standard':
      case 'Standard':
      case 'STANDARD':
        return '/assets/standar.jpg';
      case 'standard double':
      case 'Standard Double':
      case 'STANDARD DOUBLE':
        return '/assets/standar-double.jpg';
      case 'Royal':
      case 'ROYAL':
        return '/assets/Royal.jpg';
      case 'double':
      case 'Double':
      case 'DOUBLE':
        return '/assets/double.jpg';
      case 'double balcon':
      case 'Double Balcon':
      case 'DOUBLE BALCON':
        return '/assets/double-balcon.jpg';
      // Agrega más casos según sea necesario para los demás tipos de habitación
      default:
        return '/assets/default.jpg';
    }
  }
}
