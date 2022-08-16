import { userLogged } from "./booleans";

describe("Boolean tests", () => {
  it("must return true", () => {
    const res = userLogged();
    expect(res).toBeTruthy();
  });
});
