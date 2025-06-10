import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAleatorio } from './pokemon-aleatorio';

describe('PokemonAleatorio', () => {
  let component: PokemonAleatorio;
  let fixture: ComponentFixture<PokemonAleatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAleatorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAleatorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
