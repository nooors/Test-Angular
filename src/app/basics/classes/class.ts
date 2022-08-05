export class Player {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  heHasBeeHurt(hurt: number) {
    if (hurt >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - hurt;
    }

    return this.hp;
  }
}
