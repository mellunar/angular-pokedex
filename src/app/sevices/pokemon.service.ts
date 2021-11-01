import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {
  }
  baseUrl = 'https://pokeapi.co/api/v2/'

  apiListPokemons(num?:number):Observable<any>{
    if (!num){num = 0}
    if (num){num = num-1}
    return this.http.get<any>(`${this.baseUrl}pokemon?limit=20&offset=${num*20}`).pipe(
      tap(res => {res.results.map((response: any) => {
        this.apiGetPokemon(response.url).subscribe(res => response.status = res)
      })
      })
    )
  }

  apiGetPokemon(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)){
      s='0'+s
    }
    return s
  }
}
