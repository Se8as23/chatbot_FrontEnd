import { Component } from '@angular/core';
import { Appointment } from '../../model/Appointment';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss'
})
export class AppointmentDetailsComponent {

  appointment: Appointment | undefined;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.appointmentService.getAppointments().subscribe(appointments => {
          this.appointment = appointments.find(a => a.id === +id);
        });
      }
    });
  }

}
