import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent {
  vehicles?: Array<Vehicle> = [];
  currentVehicle: Vehicle = {};
  currentIndex = -1;
  currentUser: any;
  name = '';

  constructor(private vehicleService: VehicleService, private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.retrieveVehicles();
  }

  retrieveVehicles(): void {
    this.vehicleService.getAll()
      .subscribe({
        next: (data) => {
          this.vehicles = data;
        },
        error: (e) => console.error(e)
      });
  }

  searchVehicles(): void {
    this.vehicleService.search(this.name)
      .subscribe({
        next: (data) => {
          this.vehicles = data;
        },
        error: (e) => console.error(e)
      });
  }

  gotToReservationPage(vehicle: Vehicle, index: number): void {
    this.router.navigate([`reservation/${vehicle.id}`], {
      state: {
        vehicleData: vehicle,
      }
    })
  }
}
