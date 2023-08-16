import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Result } from 'src/app/interfaces/pokemonAPI';
import { PokeApiService } from 'src/app/service/poke-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private pokeService: PokeApiService) {}

  imagePositionX: number = 0;
  imagePositionY: number = 0;
  screen?: string = 'desktop';

  @ViewChild('cards') cardsElement!: ElementRef;
  pokemonList: Result[] = [];
  page: number = 1;

  margin = 10;
  loading: boolean = false;

  selectedPokemon?: Pokemon;
  rotateImg?: boolean = false;
  showDesc: boolean = false;

  imgNum: number = 1;

  ngOnInit(): void {
    this.loadList();
    this.checkScreenSize();
  }

  loadList() {
    this.loading = true;
    this.pokeService.getByPage(this.page).subscribe((data) => {
      this.pokemonList = [...this.pokemonList, ...data];
      this.page++;
      this.loading = false;
    });
  }

  onScroll(e: any) {
    if (this.loading) return;
    if (
      Math.round(
        this.cardsElement.nativeElement.clientHeight +
          this.cardsElement.nativeElement.scrollTop +
          this.margin
      ) >= e.srcElement.scrollHeight
    ) {
      this.loadList();
    }
  }

  cardClicked(id: string) {
    this.pokeService.getById(id).subscribe((data) => {
      this.selectedPokemon = data;
      this.rotateImg = false;
    });
  }

  showDescription(event: Boolean) {
    if (this.selectedPokemon) {
      this.showDesc = !this.showDesc;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (window.innerWidth <= 768 && window.innerWidth > 425) {
      this.screen = 'tablet';
    } else if (window.innerWidth <= 425) {
      this.screen = 'mobile';
    } else {
      this.screen = 'desktop';
    }
  }
}
