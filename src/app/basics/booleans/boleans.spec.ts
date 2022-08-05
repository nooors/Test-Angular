import { userLogged } from "./booleans";

xdescribe("Boolean tests", () => {
  it("must return true", () => {
    const res = userLogged();
    expect(res).toBeTruthy();
  });
});
