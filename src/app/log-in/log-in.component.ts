import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(){}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required)
  })

}
