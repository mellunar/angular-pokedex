import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/sevices/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  public pokemon: any;
  public apiError: any;

  ngOnInit(): void {
    this.route.params.subscribe(id => {this.getPokemon(id.id)})
    
  }

  getPokemon(id:string):void{
    this.pokemonService.apiGetPokemon(`${this.pokemonService.baseUrl}pokemon/${id}`).subscribe(
      res => {this.pokemon = res},
      error => {this.apiError = error}
    )
  }

  leadingZero(index: number){
    return this.pokemonService.leadingZero(index)
  }

}
