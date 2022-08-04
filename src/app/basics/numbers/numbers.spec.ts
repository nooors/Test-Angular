import { increase } from './numbers';

describe('number tests', () => {
  it('should return 100 if number is > 100', () => {
    const res = increase(300);
    expect(res).toBe(100);
  });

  it('should return number + 1 if number < 100', () => {
    const res = increase(25);
    expect(res).toEqual(26);
  });
});
