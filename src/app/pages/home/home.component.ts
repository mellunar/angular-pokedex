import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/sevices/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }
  p?: number;
  public pokemons: any;
  public count?: number;
  private pokemonSearch: any;
  ngOnInit(): void {
    this.route.params.subscribe(id => {
      this.p = id.num;
      this.pokemonService.apiListPokemons(Number(id.num)).subscribe(
        res => {
          this.pokemonSearch = res.results;
          this.pokemons = this.pokemonSearch;
          this.count = res.count;
        },
        error => {console.log(error)}
      )
    })
  }

  leadingZero(index: number){
    return this.pokemonService.leadingZero(index)
  }

  setPage(index: number){
    this.router.navigate(['/page', index])
  }

}
