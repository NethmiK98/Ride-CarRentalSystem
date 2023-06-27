import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { StorageService } from 'src/app/services/storage.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})
export class AdminReservationsComponent {
  currentUser: any;
  reservations: Array<any> = [];

  constructor(private storageService: StorageService, private router: Router, private reservationService: ReservationService, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
    this.retrieveReservations();
  }

  retrieveReservations(): void {
    this.reservationService.getAllRentals()
      .subscribe({
        next: (data) => {
          data.forEach(async (reservation) => {
            await this.vehicleService.get(reservation.vehicleId as string).subscribe({
              next: async (vehicle) => {
                const data = {
                  reservation: reservation,
                  vehicle: vehicle,
                }
                this.reservations?.push(data)
              },
              error: (e) => console.error(e)
            });
          })
        },
        error: (e) => console.error(e)
      });
  }
}
