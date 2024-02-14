import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { NewReservFormComponent } from './new-reserv-form/new-reserv-form.component';
import { ReservDetailComponent } from './reserv-detail/reserv-detail.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { AbouthUsComponent } from './abouth-us/abouth-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sing-up',
    component: SingUpComponent
  },
  {
    path: 'new-reservation',
    component: NewReservFormComponent
  },
  {
    path: 'reservation-details',
    component: ReservDetailComponent
  },
  {
    path: 'reservations',
    component: ReservationCardComponent
  },
  {
    path: 'bills',
    component: BillCardComponent
  },
  {
    path: 'termyCond',
    component: TerminosYCondicionesComponent
  },
  {
    path: 'AbouthUs',
    component: AbouthUsComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
