import { Component, OnInit } from '@angular/core';
import { BillServiceService } from '../services/bill-service.service';
import { RoomService } from '../services/room.service';
import { ReservService } from '../services/reserv.service';
import { Bill } from '../interfaces/bill';
import { Reserv } from '../interfaces/reserv';
import { Room } from '../interfaces/room';
import { ClientService } from '../services/client.service';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {
  dataBill: Bill[] = [];
  dataRoom: Room[] = [];
  dataReserv: Reserv[] = [];
  dataClient: Client[] = [];

  constructor(
    private billService: BillServiceService,
    private roomService: RoomService,
    private reservService: ReservService,
    private clientService: ClientService
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

    // Obtener datos de los clientes
    this.clientService.obtenerDatos().subscribe((data: Client[]) => {
      this.dataClient = data;
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
