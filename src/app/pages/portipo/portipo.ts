import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { CardTipo } from "../../components/card-tipo/card-tipo";
import { Nav } from "../../components/nav/nav";

@Component({
  selector: 'app-portipo',
  imports: [CardTipo, CommonModule, Nav],
  templateUrl: './portipo.html',
  styleUrl: './portipo.css'
})
export class Portipo implements OnInit {

   mostrar:boolean = false;
   cargando:boolean = false;
   tipoDePokemons: any[] = [];

  constructor(private router: Router, private PokemonService: PokemonService) {}

irAlMenu() {
  this.router.navigate(['/menu']);
}

async verTiposDePokemon()  {

    this.cargando = true;
    this.mostrar = false;
    await this.PokemonService.getTipos().subscribe(data => {
      this.tipoDePokemons = data.results;
      console.log(this.tipoDePokemons);
      this.mostrar = true;
      this.cargando = false;
    })
    
  } 

  ngOnInit() {
    this.verTiposDePokemon()
  }  

}
