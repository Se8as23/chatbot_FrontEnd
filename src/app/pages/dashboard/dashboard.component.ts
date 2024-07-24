import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  // Configuraciones de las gráficas
  public ageChartOptions: any = {
    responsive: true
  };
  public ageChartLabels: string[] = [];
  public ageChartData: any = [];
  public ageChartType: string = 'bar';

  public caloricChartOptions: any = {
    responsive: true
  };
  public caloricChartLabels: string[] = [];
  public caloricChartData: any = [];
  public caloricChartType: string = 'pie';

  public heightWeightChartOptions: any = {
    responsive: true
  };
  public heightWeightChartLabels: string[] = [];
  public heightWeightChartData: any = [];
  public heightWeightChartType: string = 'line';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(data => {
      this.processData(data);
    });
  }

  processData(patients: any[]): void {
    // Age distribution
    const ages = patients.map(p => p.edad).filter(age => age != null);
    const ageCounts = this.countOccurrences(ages);
    this.ageChartLabels = Object.keys(ageCounts);
    this.ageChartData = [{ data: Object.values(ageCounts), label: 'Edad' }];

    // Caloric foods
    const caloricCounts = this.countOccurrences(patients.map(p => p.comidascaloricas));
    this.caloricChartLabels = ['Comidas Calóricas', 'No Calóricas'];
    this.caloricChartData = [{ data: [caloricCounts['true'] || 0, caloricCounts['false'] || 0], label: 'Comidas Calóricas' }];

    // Height and weight
    const heights = patients.map(p => p.altura).filter(height => height != null);
    const weights = patients.map(p => p.peso).filter(weight => weight != null);
    this.heightWeightChartLabels = heights.map((_, index) => `Paciente ${index + 1}`);
    this.heightWeightChartData = [
      { data: heights, label: 'Altura' },
      { data: weights, label: 'Peso' }
    ];
  }

  countOccurrences(array: any[]): { [key: string]: number } {
    return array.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  }
  
}
