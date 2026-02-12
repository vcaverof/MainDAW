import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAlumno } from './detalles-alumno';

describe('DetallesAlumno', () => {
  let component: DetallesAlumno;
  let fixture: ComponentFixture<DetallesAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
