import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule, MdbDropdownMenuDirective } from 'mdb-angular-ui-kit/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { SignupScreenComponent } from './components/screens/signup-screen/signup-screen.component';
import { RentComponent } from './components/screens/rent/rent.component';
import { FooterComponent } from './components/footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ReservationComponent } from './components/screens/reservation/reservation.component';
import { PaymentComponent } from './components/screens/payment/payment.component';
import { AddCarComponent } from './components/screens/add-car/add-car.component';
import { ToastrModule } from 'ngx-toastr';
import { MyReservationsComponent } from './components/screens/my-reservations/my-reservations.component';
import { AdminReservationsComponent } from './components/screens/admin-reservations/admin-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavBarComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    RentComponent,
    FooterComponent,
    ReservationComponent,
    PaymentComponent,
    AddCarComponent,
    MyReservationsComponent,
    AdminReservationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbCollapseModule,
    MdbDropdownModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ToastrModule.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
