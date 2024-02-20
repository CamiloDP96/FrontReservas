import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';

export function matchValuesValidator(field1: string, field2: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control1 = formGroup.get(field1);
    const control2 = formGroup.get(field2);

    if (control1 && control2 && control1.value !== control2.value) {
      control2.setErrors({ 'matchValues': true });
      return { 'matchValues': true };
    } else {
      if (control2) {
        control2.setErrors(null);
      }
      return null;
    }
  };
}


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private clientService: ClientService // Inject your service
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      password2: ['', Validators.required]
    }, {
      validators: matchValuesValidator('password', 'password2') // Use your custom validator if needed
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.clientService.crearDato(this.signUpForm.value).subscribe(
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

