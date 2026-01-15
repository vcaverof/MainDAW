import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Italia } from './italia';

describe('Italia', () => {
  let component: Italia;
  let fixture: ComponentFixture<Italia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Italia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Italia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
