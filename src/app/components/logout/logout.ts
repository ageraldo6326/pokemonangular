import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {

  constructor(private router: Router) {
    localStorage.removeItem('usuario');
    localStorage.removeItem('clave');
  }

  ngOnInit() {
    this.router.navigate(['/']);
  }

}
