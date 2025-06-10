import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonPorTipo } from './card-pokemon-por-tipo';

describe('CardPokemonPorTipo', () => {
  let component: CardPokemonPorTipo;
  let fixture: ComponentFixture<CardPokemonPorTipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPokemonPorTipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPokemonPorTipo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
