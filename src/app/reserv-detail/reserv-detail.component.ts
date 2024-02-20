import { Component } from '@angular/core';
import { BillServiceService } from '../services/bill-service.service';
import { ReservService } from '../services/reserv.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-reserv-detail',
  templateUrl: './reserv-detail.component.html',
  styleUrls: ['./reserv-detail.component.css']
})
export class ReservDetailComponent {
  dataBill: any;
  dataRoom: any;
  dataReserv: any;

  constructor(
    private billService: BillServiceService,
    private roomService: RoomService,
    private reservService: ReservService
    ) { }

  ngOnInit(): void {
    this.billService.obtenerDatos().subscribe(data => {
      this.dataBill = data;
    });

    this.billService.obtenerDatoPorId(1).subscribe(data => {
      this.dataBill = data;
    });

    this.roomService.obtenerDatos().subscribe(data => {
      this.dataRoom = data;
    });

    this.roomService.obtenerDatoPorId(1).subscribe(data => {
      this.dataRoom = data;
    });
    this.reservService.obtenerDatos().subscribe(data => {
      this.dataReserv = data;
    });

    this.reservService.obtenerDatoPorId(1).subscribe(data => {
      this.dataReserv = data;
    });
  }

  getImagePath(type: string): string {
    switch (type) {
      case 'standard':
        return '/assets/standar.jpg';
      case 'standard double':
        return '/assets/standar-double.jpg';
      case 'Royal':
        return '/assets/Royal.jpg';
      case 'double':
        return '/assets/double.jpg';
      case 'double balcon':
        return '/assets/double-balcon.jpg';
      // Agrega más casos según sea necesario para los demás tipos de habitación
      default:
        return '/assets/default.jpg'; // Si no coincide con ninguno de los casos anteriores, carga una imagen predeterminada
    }
  }
}
