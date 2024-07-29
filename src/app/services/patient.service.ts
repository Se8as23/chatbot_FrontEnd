import { Injectable } from '@angular/core';
import { Patient } from '../model/Patient';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[] = []

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get<Patient[]>(environment.api + 'usuarios/list');
  }

  getPatient(cedula: string): Patient | undefined {
    return this.patients.find(p => p.cedula === cedula);
  }

  updatePatient(patient: Patient){
    return this.http.post(environment.api + 'usuarios/update', patient);
  }
}
