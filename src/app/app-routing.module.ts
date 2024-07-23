import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  { path: 'patient-details/:cedula', component: PatientDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
