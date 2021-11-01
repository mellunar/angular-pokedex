import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    this.pokemonSearch = ''
  }
  pokemonSearch!:string;
  search(){
    this.router.navigate(['/pokemon', this.pokemonSearch])
    this.pokemonSearch = '';
  }
  /*search(value: string){
    const filter = this.pokemonSearch.filter((res:any)=>{
      return !res.name.indexOf(value.toLocaleLowerCase())
    });
    this.pokemons = filter;
  }*/
}
