import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Result } from 'src/app/interfaces/pokemonAPI';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnChanges {
  @ViewChild('menuSelected') menuSelectRef!: ElementRef;
  @Output() clickId = new EventEmitter<string>();
  @Input() data?: Result;
  @Input() selected: boolean = false;
  @Input() fullData?: Pokemon;

  id: string = '0';

  ngOnChanges(): void {
    this.extractId();
  }

  extractId() {
    if (this.data && this.data.url !== '') {
      const idPattern = /\/(\d+)\/$/;
      const match = this.data.url.match(idPattern);

      if (match && match[1]) {
        this.id = match[1];
      }
    }
    if (this.fullData) {
      const idPattern = /\/(\d+)\/$/;
      const match = this.fullData.species.url.match(idPattern);

      if (match && match[1]) {
        this.id = match[1];
      }
      this.data = {
        name: this.fullData.species.name,
        url: '',
      };
    }
  }

  menuSelectAudio() {
    const audioPlayer: HTMLAudioElement = this.menuSelectRef.nativeElement;
    audioPlayer.play();
  }
}
