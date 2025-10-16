import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTemperatura } from './sensor-temperatura';

describe('SensorTemperatura', () => {
  let component: SensorTemperatura;
  let fixture: ComponentFixture<SensorTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorTemperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTemperatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
