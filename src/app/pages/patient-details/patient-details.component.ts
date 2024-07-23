import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../model/Patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient | undefined;

  constructor(private route: ActivatedRoute, private patientService: PatientService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cedula = params.get('cedula');
      if (cedula) {
        this.patientService.getPatients().subscribe(patients => {
          this.patient = patients.find(p => p.cedula === cedula);
        });
      }
    });
  }

  public updatePatient(patient: Patient): void {
    this.patientService.updatePatient(patient).subscribe(data => {
      console.log(data);
    });
  }

}
