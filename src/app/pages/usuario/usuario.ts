import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from "../../components/nav/nav";

@Component({
  selector: 'app-usuario',
  imports: [Nav],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {

  usuario:string = "";

  constructor(private router: Router) {
    this.usuario = localStorage.getItem('usuario') || '';
  }


  logout() {
    this.router.navigate(['/logout']);
  }

}
