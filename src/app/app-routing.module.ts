import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: 'page/:num', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
