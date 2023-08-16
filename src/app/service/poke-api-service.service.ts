import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Result } from '../interfaces/pokemonAPI';
import { Data } from '../interfaces/pokemonAPI';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

private apiUrl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getByPage( page:number , limit:number = 34): Observable <Result[]> {
    if (page > 7)  return of([]);
    const offset = limit * (page -1);
  return this.http.get<Data>(this.apiUrl + `pokemon/?limit=+${limit}&offset=${offset}`).pipe(
    map(response => response.results),
    catchError(error => {
      console.error('Error fetching data:', error);
      return [];
    })
  );
  }

  getById(id: string): Observable <Pokemon>{
    return this.http.get<any>( this.apiUrl + `pokemon/${id}`);
  }

  getDescription(id:string | number): Observable <any>{
    return this.http.get<any>(this.apiUrl + `pokemon-species/${id}`)
      .pipe(
        map(response => {
          const esFlavorText = response.flavor_text_entries.find((item: any) => item.language.name === 'es');
          return esFlavorText ? esFlavorText.flavor_text : undefined;
        })
        )
  }
}
