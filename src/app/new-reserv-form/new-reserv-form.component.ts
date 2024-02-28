import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../services/room.service';
import { ReservService } from '../services/reserv.service';

@Component({
  selector: 'app-new-reserv-form',
  templateUrl: './new-reserv-form.component.html',
  styleUrls: ['./new-reserv-form.component.css']
})
export class NewReservFormComponent {

  newReservForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private reservService: ReservService
  ) {
    this.newReservForm = this.formBuilder.group({
      room: ['', [Validators.required,Validators.pattern(/^-?\d+$/)]],
      username: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      payMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    alert('Reserva Realizada');
  }
}
