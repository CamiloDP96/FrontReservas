import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Credentials } from '../api.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  creds: Credentials = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){}

  login(form: NgForm) {
    if (form.valid) {
      // Serializar los datos del formulario a JSON
      const body = JSON.stringify(this.creds);
      // Enviar la solicitud HTTP al servicio de autenticación
      this.authService.login(body)
        .subscribe(response => {
          this.router.navigate(['']);
        });
    }
  }
}
