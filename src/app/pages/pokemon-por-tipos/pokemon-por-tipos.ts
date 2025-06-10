import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { CardPokemonPorTipo } from "../../components/card-pokemon-por-tipo/card-pokemon-por-tipo";
import { ActivatedRoute } from '@angular/router';
import { Nav } from "../../components/nav/nav";

interface PokemonInterface {
    name: string;
    imageUrl: string;
}

@Component({
  selector: 'app-pokemon-por-tipos',
  imports: [CardPokemonPorTipo, CommonModule, Nav],
  templateUrl: './pokemon-por-tipos.html',
  styleUrl: './pokemon-por-tipos.css'
})



export class PokemonPorTipos implements OnInit {



  cargando: boolean = false;
  mostrar: boolean = false;
  pokemonesPorTipo: any[] = [];
  tipo:string = "";


  constructor(private router: Router, private PokemonService: PokemonService, private route: ActivatedRoute) {}

irAtras() {
  this.router.navigate(['/portipo']);
}


async verPokemonPorTipo(tipo:string)  {

    this.cargando = true;
    this.mostrar = false;

  await this.PokemonService.obtenerPokemonesPorTipo(tipo).subscribe(data => {
     this.pokemonesPorTipo = data;
     console.log("fotos", this.pokemonesPorTipo);
     this.cargando = false;
     this.mostrar = true;
   })
   
} 

ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo') || '';
    });    
    this.verPokemonPorTipo(this.tipo)
} 

}
