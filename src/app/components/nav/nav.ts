import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  constructor(private router: Router) {
    this.usuario = localStorage.getItem('usuario') || '';
  }

  usuario:string = '';
  menuAbierto: boolean = false;  

  handleUsuario() {
    this.router.navigate(['usuario']);
  }  

}
