import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uruguay } from './uruguay';

describe('Uruguay', () => {
  let component: Uruguay;
  let fixture: ComponentFixture<Uruguay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uruguay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uruguay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
