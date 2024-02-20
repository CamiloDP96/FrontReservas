import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../services/room.service';

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
    private roomService: RoomService // Inject your service
  ) {
    this.newReservForm = this.formBuilder.group({
      Room: ['', Validators.required],
      username: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      payMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newReservForm.invalid) {
      return;
    }

    this.roomService.crearDato(this.newReservForm.value).subscribe(
      (response) => {
        console.log('Response from server:', response);
        // Handle success response
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }
}
