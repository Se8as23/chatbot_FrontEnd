import { Injectable } from '@angular/core';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[] = [
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    {
      cedula: '1234567890',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: '123-456-7890',
      correo: 'juan.perez@example.com',
      edad: 30,
      altura: 1.75,
      peso: 70,
      entredomidas: 'No',
      comidascaloricas: true,
      prediagnostico: 'Riesgo de Obesidad'
    },
    // Añade más objetos de pacientes según sea necesario
  ];    


  constructor() { }


  getPatients(): Patient[] {
    return this.patients;
  }

  getPatient(cedula: string): Patient | undefined {
    return this.patients.find(p => p.cedula === cedula);
  }
}
