import { obtainRobots } from './arrays';

describe('Arrays tests', () => {
  it('should returns 3 robots at least', () => {
    const res = obtainRobots();
    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('should contain MegaMan y Ultron', () => {
    const res = obtainRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');
  });
});
