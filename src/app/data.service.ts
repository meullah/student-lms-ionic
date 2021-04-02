import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/data';
  studentDetails = 'test test';

  getData(data) {
    return this.http.post(this.url, data);
  }
  getStudentDetails(_details) {
    this.studentDetails = _details;
    console.log(this.studentDetails);
  }
}
