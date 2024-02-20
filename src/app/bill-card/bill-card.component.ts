import { Component } from '@angular/core';
import { BillServiceService } from '../services/bill-service.service';
import { RoomService } from '../services/room.service';
import { ReservService } from '../services/reserv.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent {
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
}
