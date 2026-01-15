import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Argentina } from './argentina';

describe('Argentina', () => {
  let component: Argentina;
  let fixture: ComponentFixture<Argentina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Argentina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Argentina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
