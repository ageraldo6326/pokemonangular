import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Router } from '@angular/router';
import { Nav } from "../nav/nav";

@Component({
  selector: 'app-opciones',
  imports: [Card, Nav],
  templateUrl: './opciones.html',
  styleUrl: './opciones.css'
})
export class Opciones {

  constructor(private router: Router) {}
  
  pokemonAleatorio() {
    this.router.navigate(['/aleatorio']);
  }

  pokemonPorTipo() {
    this.router.navigate(['/portipo']);
  }  

  buscarPokemon() {
    this.router.navigate(['/buscarpokemon']);
  }    

}
