import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectornumerico } from './selectornumerico';

describe('Selectornumerico', () => {
  let component: Selectornumerico;
  let fixture: ComponentFixture<Selectornumerico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectornumerico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selectornumerico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
