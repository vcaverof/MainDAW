import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAlumnos } from './mostrar-alumnos';

describe('MostrarAlumnos', () => {
  let component: MostrarAlumnos;
  let fixture: ComponentFixture<MostrarAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
