// describe('String tests');

import { message } from "./sting";

// it('should return a string');

describe("String tests", () => {
  it("should return a string", () => {
    const resp = message("Papito");

    expect(typeof resp).toBe("string");
  });

  it("should contains the name", () => {
    const name = "Josefino";
    const resp = message(name);

    expect(resp).toContain(name);
  });
});
