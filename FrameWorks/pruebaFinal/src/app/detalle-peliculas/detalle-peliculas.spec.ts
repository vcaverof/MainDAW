import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculas } from './detalle-peliculas';

describe('DetallePeliculas', () => {
  let component: DetallePeliculas;
  let fixture: ComponentFixture<DetallePeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePeliculas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
