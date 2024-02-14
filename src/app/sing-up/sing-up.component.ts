import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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

  constructor(){}

  singUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    password2: new FormControl('', Validators.required)
  }, {
    validators: matchValuesValidator('password', 'password2')
  });
}

