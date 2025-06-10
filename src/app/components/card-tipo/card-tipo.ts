import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-tipo',
  imports: [RouterLink],
  templateUrl: './card-tipo.html',
  styleUrl: './card-tipo.css'
})
export class CardTipo {

  @Input() tipo:string = "";
  @Input() icono:string = "";
  @Input() routerLink:string = "";
}
