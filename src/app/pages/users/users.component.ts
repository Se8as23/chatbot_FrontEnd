import { Component } from '@angular/core';
import { Patient } from '../../model/Patient';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  patients: Patient[] = [];

  constructor(private router: Router, private patienService: PatientService) {}

  ngOnInit(): void {
    this.patients = this.patienService.getPatients();
  }

  goToDetails(patient: Patient): void {
    this.router.navigate(['/patient-details', patient.cedula]);
  }

}
