import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Nav } from "../../components/nav/nav";

@Component({
  imports: [ReactiveFormsModule, Nav],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  errorUsuario: boolean = false;
  errorClave: boolean = false;
  errorCredenciales: boolean = false;

  userForm: FormGroup;

  constructor(private router: Router) { 
    this.userForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      clave: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Error:', this.userForm.errors);
    if (this.userForm.valid) {
      this.errorCredenciales = false;
      this.errorUsuario = false;
      this.errorClave = false;
      if (this.userForm.value.usuario === 'ageraldo' && this.userForm.value.clave === '1234') {
        console.log('Formulario enviado:', this.userForm.value);
        localStorage.setItem('usuario', this.userForm.value.usuario);
        localStorage.setItem('clave', this.userForm.value.clave);         
        this.router.navigate(['/menu']);        
      } else {
        this.errorCredenciales = true;
        this.errorUsuario = false;
        this.errorClave = false;
      }
    } else {
      this.errorCredenciales = false;
      if (this.userForm.value.usuario === '') {
        this.errorUsuario = true;
      } else {
        this.errorUsuario = false;
      }

      if (this.userForm.value.clave === '') {
        this.errorClave = true;
      } else {
        this.errorClave = false;
      }
    }
  }

}
