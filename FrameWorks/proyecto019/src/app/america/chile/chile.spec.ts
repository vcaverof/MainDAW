import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chile } from './chile';

describe('Chile', () => {
  let component: Chile;
  let fixture: ComponentFixture<Chile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
