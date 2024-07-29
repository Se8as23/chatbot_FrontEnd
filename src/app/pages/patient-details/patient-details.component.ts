import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../model/Patient';
import { PatientService } from '../../services/patient.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  public downloadPDF(): void {
    // Asegúrate de que 'patient' tenga los datos necesarios
    if (this.patient) {
      const doc = new jsPDF();
      const logoImg = '../../../assets/img/logo.png'; // Agrega la ruta de tu logo aquí

      // Añadir logo al PDF
      doc.addImage(logoImg, 'PNG', 80, 10, 50, 45); // Ajusta la posición y el tamaño según sea necesario

      doc.setFontSize(16);
      doc.text('Detalles del Paciente', 10, 65); // Título

      // Agregar datos del paciente
      doc.setFontSize(12);
      const patientDetails = [
        `Nombre: ${this.patient.nombres} ${this.patient.apellidos}`,
        `Cédula: ${this.patient.cedula}`,
        `Edad: ${this.patient.edad}`,
        `Teléfono: ${this.patient.telefono}`,
        `Correo: ${this.patient.correo}`,
        `Altura: ${this.patient.altura} m`,
        `Peso: ${this.patient.peso} kg`,
        `Entre Comidas: ${this.patient.entrecomidas}`,
        `Comidas Calóricas: ${this.patient.comidascaloricas ? 'Sí' : 'No'}`,
        `Prediagnóstico: ${this.patient.prediagnostico}`,
        `Recomendación: ${this.patient.recomendacion}`
      ];

      let verticalOffset = 80; // Posición vertical inicial después del título
      patientDetails.forEach((detail) => {
        doc.text(detail, 10, verticalOffset);
        verticalOffset += 10; // Espacio entre las líneas
      });

      // Guardar el PDF
      doc.save('patient-details.pdf');
    }
}

}
