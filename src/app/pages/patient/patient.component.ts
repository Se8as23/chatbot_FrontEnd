import { Component } from '@angular/core';
import { Patient } from '../../model/Patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {

  patients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
      console.log(data);
    });
  }

  goToDetails(patient: Patient): void {
    this.router.navigate(['/patient-details', patient.cedula]);
  }

}
