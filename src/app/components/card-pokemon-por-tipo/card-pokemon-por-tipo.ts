import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pokemon-por-tipo',
  imports: [],
  templateUrl: './card-pokemon-por-tipo.html',
  styleUrl: './card-pokemon-por-tipo.css'
})
export class CardPokemonPorTipo {

  @Input() nombre:string = "";
  @Input() foto:string = "";
}
