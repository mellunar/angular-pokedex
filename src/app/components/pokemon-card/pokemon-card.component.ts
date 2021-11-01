import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: any;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)){
      s='0'+s
    }
    return s
  }

  getImage() {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.leadingZero(this.index)}.png`
  }

}
