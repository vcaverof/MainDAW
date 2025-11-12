import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentiladoresComponent } from './ventiladores-component';

describe('VentiladoresComponent', () => {
  let component: VentiladoresComponent;
  let fixture: ComponentFixture<VentiladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentiladoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentiladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
