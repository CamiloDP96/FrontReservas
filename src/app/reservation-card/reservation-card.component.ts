import { Component, OnInit } from '@angular/core';
import { BillServiceService } from '../services/bill-service.service';
import { ReservService } from '../services/reserv.service';
import { RoomService } from '../services/room.service';
import { Room } from '../interfaces/room';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent  implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService
    ) { }

  ngOnInit(): void {

    this.roomService.obtenerDatos().subscribe(
      (data: Room[]) => {
        this.rooms = data;
      }
    );
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
