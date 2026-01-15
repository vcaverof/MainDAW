import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Europa } from './europa';

describe('Europa', () => {
  let component: Europa;
  let fixture: ComponentFixture<Europa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Europa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Europa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
