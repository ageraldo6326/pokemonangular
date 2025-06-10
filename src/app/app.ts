import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menu } from "./pages/menu/menu";

@Component({
  selector: 'app-root',
  imports: [ FormsModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokemon';
}
