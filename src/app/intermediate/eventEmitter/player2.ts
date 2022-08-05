import { EventEmitter } from "@angular/core";

export class Player2 {
  hp: number;
  hpChanges = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  heHasBeenHurt(hurt: number) {
    if (hurt >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - hurt;
    }

    this.hpChanges.emit(this.hp);
  }
}
