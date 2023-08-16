import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent {
@Input() pokemon?: any;
@Input() rotate? : boolean = false;
@Input() imagePositionX: number = 0;
  @Input() imagePositionY: number = 0;

}
