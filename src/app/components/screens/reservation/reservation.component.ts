import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  currentUser: any;
  vehicle: Vehicle = {
    name: '',
    image: '',
    price: 0,
    passengers: 0,
    usage: '',
    type: '',
  }
  paymentMethod = '1';
  reservation: Reservation = {
    pickUpLocation: '',
    dropOffLocation: '',
    pickUpTime: new Date(),
    dropOffTime: new Date(),
    totalPrice: 0,
    vehicleId: '',
    userId: '',
    paymentMethod: 'Cash'
  }

  constructor(private storageService: StorageService, private router: Router, private reservationService: ReservationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.reservation.userId = this.currentUser.id;
    
    var vehicleData = history.state.vehicleData
    if (vehicleData) {
      this.vehicle = vehicleData;
      this.reservation.vehicleId = vehicleData.id;
    }
    this.getTotal()
  }

  addReservation() {
    var reserve: Reservation = this.reservation;
    reserve.pickUpTime = new Date(this.reservation.pickUpTime!);
    reserve.dropOffTime = new Date(this.reservation.dropOffTime!);

    this.reservationService.create(reserve)
      .subscribe({
        next: (res) => {
          this.toastr.success('Reservation Succes!');
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  getTotal() {
    if (this.vehicle?.price && this.reservation.pickUpTime && this.reservation.dropOffTime) {
      console.log(this.getDayDiff(this.reservation.pickUpTime, this.reservation.dropOffTime))
      this.reservation.totalPrice = this.vehicle?.price * this.getDayDiff(new Date(this.reservation.pickUpTime!), new Date(this.reservation.dropOffTime!));
    }
  }

  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;

    return Math.round(
      Math.abs(Number(endDate) - Number(startDate)) / msInDay
    );
  }
}
