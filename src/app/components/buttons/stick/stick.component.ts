import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.css']
})
export class StickComponent {
  @Output() rotateEvent = new EventEmitter<boolean>();
  @Output() positionX = new EventEmitter<number>();
  @Output() positionY = new EventEmitter<number>();

  rotateImg?: boolean = false;

  imagePositionX: number = 0;
  imagePositionY: number = 0;

  imageStep: number = 15;

  maxImagePositionX: number = 100; // Límite de movimiento a la derecha
  minImagePositionX: number = -100; // Límite de movimiento a la izquierda
  maxImagePositionY: number = 100; // Límite de movimiento hacia abajo
  minImagePositionY: number = -100; // Límite de movimiento hacia arriba

  moveImage(direction: 'left' | 'right' | 'up' | 'down') {
    switch (direction) {
      case 'left':
        if (this.imagePositionX - this.imageStep >= this.minImagePositionX) {
          this.imagePositionX -= this.imageStep;
        } else {
          this.imagePositionX = this.minImagePositionX;
        }
        this.positionX.emit(this.imagePositionX)
        break;
      case 'right':
        if (this.imagePositionX + this.imageStep <= this.maxImagePositionX) {
          this.imagePositionX += this.imageStep;
        } else {
          this.imagePositionX = this.maxImagePositionX;
        }
        this.positionX.emit(this.imagePositionX)
        break;
      case 'up':
        if (this.imagePositionY - this.imageStep >= this.minImagePositionY) {
          this.imagePositionY -= this.imageStep;
        } else {
          this.imagePositionY = this.minImagePositionY;
        }
        this.positionY.emit(this.imagePositionY)
        break;
      case 'down':
        if (this.imagePositionY + this.imageStep <= this.maxImagePositionY) {
          this.imagePositionY += this.imageStep;
        } else {
          this.imagePositionY = this.maxImagePositionY;
        }
        this.positionY.emit(this.imagePositionY)
        break;
    }
  }

  imgSideSel() {
    this.rotateImg = !this.rotateImg;
    this.rotateEvent.emit(this.rotateImg)
  }
}
