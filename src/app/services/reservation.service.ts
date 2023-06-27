import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation.model';

const baseUrl = 'http://localhost:8080/api/rent';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findUserRentals(id: any): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${baseUrl}/user/${id}`);
  }

  getAllRentals(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${baseUrl}/`);
  }
}
