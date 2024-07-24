import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/Patient';
import { Appointment } from '../../model/Appointment';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-generator',
  templateUrl: './appointment-generator.component.html',
  styleUrl: './appointment-generator.component.scss'
})
export class AppointmentGeneratorComponent implements OnInit {

  appointmentForm: FormGroup;
  patients: Patient[] = [];

  constructor(private fb: FormBuilder, private pattienService: PatientService, private apointmentService: AppointmentService) {

    this.appointmentForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      cedula: ['0000000001'],
    });
  }

  ngOnInit(): void {
    this.loadPatients();
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = {
        ...this.appointmentForm.value,
        fecha: this.formatDate(this.appointmentForm.value.fecha),
        hora: this.formatTime(this.appointmentForm.value.hora),
        id_medico: localStorage.getItem('id') ?? '',
        estado: false
      };
      this.apointmentService.saveAppointment(appointment).subscribe(data => {
        console.log(data);
      });
      // Aquí puedes hacer la llamada a tu servicio para enviar los datos
    } else {
      console.log('Form is invalid');
    }
  }

  private formatDate(date: string): string {
    const parsedDate = new Date(date);
    return parsedDate.toISOString().split('T')[0];
  }

  private formatTime(time: string): string {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}:00`;
  }

  private loadPatients(): void {
    this.pattienService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

}
