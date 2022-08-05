import { Player2 } from "./player2";

describe("Player2 Emit", () => {
  let player: Player2;

  beforeEach(() => (player = new Player2()));

  it("Should emit an event when player is hurt", () => {
    let newHP = 0;
    player.hpChanges.subscribe((hp) => (newHP = hp));
    player.heHasBeenHurt(1000);
    expect(newHP).toBe(0);
  });

  it("Should emit an event when player is hurt and survive if hp is lower than 100", () => {
    let newHP = 0;
    player.hpChanges.subscribe((hp) => (newHP = hp));
    player.heHasBeenHurt(50);
    expect(newHP).toBe(50);
  });
});
