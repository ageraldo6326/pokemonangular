import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;   
    return this.http.get(url)
  }

  getPokemonByName(name:string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`; 
    console.log(url); 
    return this.http.get(url)
  }  

  getDescripcion(): Observable<any> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon-species/${randomId}`;   
    return this.http.get(url)
  }  

  getTipos(): Observable<any> {
    const url = `https://pokeapi.co/api/v2/type/`; 
    console.log(url); 
    return this.http.get(url)
  }

   getPokemonPorTipo(tipo:string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/type/${tipo}`; 
    console.log(url); 
    return this.http.get(url)
  } 

obtenerPokemonesPorTipo(tipo: string): Observable<{ name: string; imageUrl: string }[]> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${tipo}`).pipe(
      map(res => {
        return res.pokemon.map((item: any) => {
          const name = item.pokemon.name;
          const urlParts = item.pokemon.url.split('/');
          const id = urlParts[urlParts.length - 2];

          return {
            name: name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
          };
        });
      })
    );

}
}
