import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
  selectedFiles?: FileList;
  vehicle: Vehicle = {
    name: '',
    image: '',
    price: 0,
    passengers: 0,
    usage: '',
    type: '',
  }

  constructor(private router: Router, private toastr: ToastrService, private fileUploadService: FileUploadService, private vehicleService: VehicleService) { }

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;

    if (this.selectedFiles && this.selectedFiles[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
      };

      reader.readAsDataURL(this.selectedFiles[0]);

      this.upload(this.selectedFiles[0])
    }
  }

  upload(file: File): void {
    if (file) {
      this.fileUploadService.upload(file).subscribe({
        next: async data => {
          if (data) {
            this.vehicle.image = data.imageUrl;
            this.toastr.success('Image uploaded!');
          }
        },
        error: err => { 
          this.toastr.error('Image upload failure!');
        }
      }
      );
    }
  }

  addCar(){
    this.vehicleService.create(this.vehicle).subscribe({
      next: async data => {
        if (data) {
          this.toastr.success('Added new vehicle!');
          this.router.navigate(['/'])
        }
      },
      error: err => {
        this.toastr.error('Adding new vehicle failure!');
      }
    }
    );
  }
}
