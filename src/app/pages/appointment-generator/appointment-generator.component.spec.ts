import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGeneratorComponent } from './appointment-generator.component';

describe('AppointmentGeneratorComponent', () => {
  let component: AppointmentGeneratorComponent;
  let fixture: ComponentFixture<AppointmentGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
