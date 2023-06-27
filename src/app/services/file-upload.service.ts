import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/api/upload`, formData);
  }
}