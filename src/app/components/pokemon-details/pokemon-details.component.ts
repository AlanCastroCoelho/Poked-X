import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokeApiService } from 'src/app/service/poke-api-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  descripcion: string = '';

  constructor(private pokeService: PokeApiService) {}

  ngOnChanges(): void {
if(this.pokemon){
  this.pokeService.getDescription(this.pokemon?.id).subscribe((data) => {
  this.descripcion = data;
});}
  }
}
