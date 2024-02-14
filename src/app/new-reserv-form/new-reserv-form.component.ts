import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-reserv-form',
  templateUrl: './new-reserv-form.component.html',
  styleUrls: ['./new-reserv-form.component.css']
})
export class NewReservFormComponent {

  constructor(){}

  newReserv = new FormGroup({
    Room: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    checkInDate: new FormControl('', Validators.required),
    checkOutDate: new FormControl('', Validators.required),
    payMethod: new FormControl('', Validators.required)
  })
}
