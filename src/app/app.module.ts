// angular core
import { NgModule } from '@angular/core';

// angular components
import { AppComponent } from './app.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { NewReservFormComponent } from './new-reserv-form/new-reserv-form.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ReservDetailComponent } from './reserv-detail/reserv-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { AbouthUsComponent } from './abouth-us/abouth-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCardComponent,
    BillCardComponent,
    NewReservFormComponent,
    HomeComponent,
    LogInComponent,
    SingUpComponent,
    ReservDetailComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    TerminosYCondicionesComponent,
    AbouthUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
