import { Player } from "./class";

let player = new Player();

beforeEach(() => {
  player = new Player();
});

xdescribe("Class tests", () => {
  it("Should return 80 hp if recieves 20 hurt", () => {
    // const player = new Player();
    const resp = player.heHasBeeHurt(20);
    expect(resp).toBe(80);
  });

  it("Should return 50 hp if recieves 50 hurt", () => {
    // const player = new Player();
    const resp = player.heHasBeeHurt(50);
    expect(resp).toBe(50);
  });

  it("Should return 0 hp if recieves 100 o more hurt", () => {
    // const player = new Player();
    const resp = player.heHasBeeHurt(100);
    expect(resp).toBe(0);
  });
});
