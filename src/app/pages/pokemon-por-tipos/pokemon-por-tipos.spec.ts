import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPorTipos } from './pokemon-por-tipos';

describe('PokemonPorTipos', () => {
  let component: PokemonPorTipos;
  let fixture: ComponentFixture<PokemonPorTipos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPorTipos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPorTipos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
