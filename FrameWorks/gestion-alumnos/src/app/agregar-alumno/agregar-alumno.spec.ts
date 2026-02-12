import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumno } from './agregar-alumno';

describe('AgregarAlumno', () => {
  let component: AgregarAlumno;
  let fixture: ComponentFixture<AgregarAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
