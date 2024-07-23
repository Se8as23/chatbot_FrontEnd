import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientComponent } from './pages/patient/patient.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SoonComponent } from './pages/soon/soon.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'patient-details/:cedula', component: PatientDetailsComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'appointment-details/:id', component: AppointmentDetailsComponent },
  { path: 'soon', component: SoonComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
