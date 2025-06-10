import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Nav } from "../../components/nav/nav";


@Component({
  selector: 'app-pokemon-aleatorio',
  imports: [CommonModule, Nav],
  templateUrl: './pokemon-aleatorio.html',
  styleUrl: './pokemon-aleatorio.css'
})
export class PokemonAleatorio {

   pokemon: any = null;
   descripcionPokemon: any = null;
   mostrar:boolean = false;
   cargando:boolean = false;

  constructor(private router: Router, private PokemonService: PokemonService) {}

  irAlMenu() {
    this.router.navigate(['/menu']);
  }

  async verPokemon() {

    this.cargando = true;
    this.mostrar = false;
    await this.PokemonService.getPokemon().subscribe(data => {
      this.pokemon = data
      console.log(this.pokemon); 
      console.log('Nombre', this.pokemon.name);
      console.log('Tipo', this.pokemon.types[0].type.name);
      console.log('Especie', this.pokemon.species.name);
      console.log('Estatura', this.pokemon.height);
      console.log('Forma', this.pokemon.forms[0].name);
      console.log('Tipo', this.pokemon.cries.latest);
      console.log('Foto', this.pokemon.sprites.other.home.front_default)
      
    })

    await this.PokemonService.getDescripcion().subscribe(data => {
      this.descripcionPokemon = data
      console.log(this.descripcionPokemon.flavor_text_entries[0].flavor_text); 
      this.mostrar = true;
      this.cargando = false;
    }) 
    
  }  

}
