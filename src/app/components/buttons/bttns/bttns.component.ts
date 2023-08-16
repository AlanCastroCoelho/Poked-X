import { Component, ViewChild,ElementRef, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-bttns',
  templateUrl: './bttns.component.html',
  styleUrls: ['./bttns.component.css']
})
export class BttnsComponent {
  @Output() showDescE = new EventEmitter<boolean>();
  @Output() imgNumberE = new EventEmitter<number>();

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  audioFiles: string[] = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3'];
  currentAudIndex: number = 0;
  
  @ViewChild('menuSelected') menuSelectRef!: ElementRef;

  @ViewChild('cards') cardsElement!: ElementRef;

  focusedIndex: number = -1;

  page: number = 1;

  margin = 10;


  showDesc: boolean = false;

  imgNum: number = 1;

@Input() screen?:string = 'desktop';

  prevImg() {
    if (this.imgNum === 1) {
    } else {
      this.imgNum--;
    }
    this.imgNumberE.emit(this.imgNum)
  }

  nextImg() {
    if (this.imgNum < 5 && this.imgNum > 0) {
      this.imgNum++;
      this.imgNumberE.emit(this.imgNum)
    }
  }
  playNextAudio() {
    this.audioPlayer.nativeElement.src = `assets/audio/${
      this.audioFiles[this.currentAudIndex]
    }`;
    this.audioPlayer.nativeElement.play();

    this.currentAudIndex = (this.currentAudIndex + 1) % this.audioFiles.length;
  }

  menuSelectAudio() {
    const audioPlayer: HTMLAudioElement = this.menuSelectRef.nativeElement;
    audioPlayer.play();
  }
showDescription(){
  this.showDesc = !this.showDesc;
  this.showDescE.emit(this.showDesc)
}
  }

