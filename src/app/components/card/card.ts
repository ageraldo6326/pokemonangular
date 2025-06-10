import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() clase:string = '';
  @Input() icono:string = '';
  @Input() titulo:string = '';
  @Input() descripcion:string = ''; 
}
