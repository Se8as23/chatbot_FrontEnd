import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './layouts/Admin/header/header.component';
import { FooterComponent } from './layouts/Admin/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './layouts/Admin/sidebar/sidebar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderUserComponent } from './layouts/User/header-user/header-user.component';
import { FooterUserComponent } from './layouts/User/footer-user/footer-user.component';
import { IndexComponent } from './layouts/User/index/index.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { PatientComponent } from './pages/patient/patient.component';
import { SoonComponent } from './pages/soon/soon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SigninComponent,
    DashboardComponent,
    HeaderUserComponent,
    FooterUserComponent,
    IndexComponent,
    PatientDetailsComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
    PatientComponent,
    SoonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
