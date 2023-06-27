import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { SignupScreenComponent } from './components/screens/signup-screen/signup-screen.component';
import { RentComponent } from './components/screens/rent/rent.component';
import { ReservationComponent } from './components/screens/reservation/reservation.component';
import { PaymentComponent } from './components/screens/payment/payment.component';
import { AddCarComponent } from './components/screens/add-car/add-car.component';
import { MyReservationsComponent } from './components/screens/my-reservations/my-reservations.component';
import { AdminReservationsComponent } from './components/screens/admin-reservations/admin-reservations.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'signup', component: SignupScreenComponent },
  { path: 'rent', component: RentComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'myreservations', component: MyReservationsComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'admin/reservations', component: AdminReservationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
