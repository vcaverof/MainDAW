import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombillaComponent } from './bombilla-component';

describe('BombillaComponent', () => {
  let component: BombillaComponent;
  let fixture: ComponentFixture<BombillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
