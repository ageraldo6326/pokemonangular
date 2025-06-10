import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Nav } from "../../components/nav/nav";

@Component({
  selector: 'app-buscarpokemon',
  imports: [CommonModule, FormsModule, Nav],
  templateUrl: './buscarpokemon.html',
  styleUrl: './buscarpokemon.css'
})

export class Buscarpokemon {

     pokemon: any = null;
     descripcionPokemon: any = null;
     mostrar:boolean = false;
     cargando:boolean = false;
     nombre:string = '';
     pokemonNoEncontrado: boolean = false;
  
    constructor(private router: Router, private PokemonService: PokemonService) {}

    ocultar() {
      this.pokemonNoEncontrado = false;
    }
  
    irAlMenu() {
      this.router.navigate(['/menu']);
    }
  


  verPokemonPorNombre() {
    if (!this.nombre || this.nombre.trim() === '') {
      this.pokemonNoEncontrado = false;
      this.mostrar = false;
      return;
    }

    this.cargando = true;
    this.mostrar = false;
    this.pokemonNoEncontrado = false;  // Reseteas el mensaje

    this.PokemonService.getPokemonByName(this.nombre).subscribe({
      next: (data) => {
        this.pokemon = data;

        if (!this.pokemon) {
          this.pokemonNoEncontrado = true; 
          this.cargando = false;
          this.mostrar = false;
        } else {
          this.PokemonService.getDescripcion().subscribe({
            next: (descData) => {
              this.descripcionPokemon = descData;
              this.mostrar = true;
              this.cargando = false;
            },
            error: () => {
              this.cargando = false;
              this.mostrar = false;
            }
          });
        }
      },
      error: () => {
        this.pokemonNoEncontrado = true;
        this.cargando = false;
        this.mostrar = false;
      }
    });
  }

  }
