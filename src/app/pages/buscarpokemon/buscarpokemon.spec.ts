import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buscarpokemon } from './buscarpokemon';

describe('Buscarpokemon', () => {
  let component: Buscarpokemon;
  let fixture: ComponentFixture<Buscarpokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buscarpokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buscarpokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
