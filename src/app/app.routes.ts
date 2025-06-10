import { Routes } from '@angular/router';
import { PokemonAleatorio } from './pages/pokemon-aleatorio/pokemon-aleatorio';
import { Opciones } from './components/opciones/opciones';
import { Portipo } from './pages/portipo/portipo';
import { Buscarpokemon } from './pages/buscarpokemon/buscarpokemon';
import { Login } from './pages/login/login';
import { PokemonPorTipos } from './pages/pokemon-por-tipos/pokemon-por-tipos';
import { Logout } from './components/logout/logout';
import { Usuario } from './pages/usuario/usuario';
import { authGuardGuard } from './guards/auth.guard-guard';


export const routes: Routes = [
  { path: '', component: Login }, 
  { path: 'login', component: Login }, 
  { path: 'menu', component: Opciones, canActivate: [authGuardGuard] },
  { path: 'aleatorio', component: PokemonAleatorio, canActivate: [authGuardGuard] },
  { path: 'portipo', component: Portipo, canActivate: [authGuardGuard] },
  { path: 'pokemon-tipo/:tipo', component: PokemonPorTipos, canActivate: [authGuardGuard] },
  { path: 'buscarpokemon', component: Buscarpokemon, canActivate: [authGuardGuard] },
  { path: 'logout', component: Logout, canActivate: [authGuardGuard] },
  { path: 'usuario', component: Usuario, canActivate: [authGuardGuard] }
];

