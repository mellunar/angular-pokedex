import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from './sevices/pokemon.service';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonCardComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
