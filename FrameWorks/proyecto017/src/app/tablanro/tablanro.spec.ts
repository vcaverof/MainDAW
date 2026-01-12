import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablanro } from './tablanro';

describe('Tablanro', () => {
  let component: Tablanro;
  let fixture: ComponentFixture<Tablanro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablanro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablanro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
