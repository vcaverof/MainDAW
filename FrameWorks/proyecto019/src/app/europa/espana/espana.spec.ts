import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espana } from './espana';

describe('Espana', () => {
  let component: Espana;
  let fixture: ComponentFixture<Espana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Espana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Espana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
