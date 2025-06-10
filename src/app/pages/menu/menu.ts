import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ Header],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
