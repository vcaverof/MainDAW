import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalefactoresComponent } from './calefactores-component';

describe('CalefactoresComponent', () => {
  let component: CalefactoresComponent;
  let fixture: ComponentFixture<CalefactoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalefactoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalefactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
