import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronica } from './electronica';

describe('Electronica', () => {
  let component: Electronica;
  let fixture: ComponentFixture<Electronica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electronica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electronica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
