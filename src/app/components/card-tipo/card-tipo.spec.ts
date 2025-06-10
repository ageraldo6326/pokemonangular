import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTipo } from './card-tipo';

describe('CardTipo', () => {
  let component: CardTipo;
  let fixture: ComponentFixture<CardTipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTipo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
