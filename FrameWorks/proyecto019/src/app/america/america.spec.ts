import { ComponentFixture, TestBed } from '@angular/core/testing';

import { America } from './america';

describe('America', () => {
  let component: America;
  let fixture: ComponentFixture<America>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [America]
    })
    .compileComponents();

    fixture = TestBed.createComponent(America);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
