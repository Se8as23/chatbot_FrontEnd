import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/Appointment';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get<Appointment[]>(`${environment.api}turnos/list`);
  }

  saveAppointment(appointment: Appointment) {
    return this.http.post(`${environment.api}turnos/save`, appointment);
  }
}
