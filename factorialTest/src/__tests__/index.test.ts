import { factorialFunc, memo } from '../index';

describe('Memoo', () => {
    beforeAll(() => {
      /* Runs before all tests */
    })
    afterAll(() => {
      /* Runs after all tests */
    })
    beforeEach(() => {
      /* Runs before each test */
    })
    afterEach(() => {
      /* Runs after each test */
    })
  
    test("Is it memoized factorial function return right values?", () => { 
      const memoFunc = memo();
      expect(memoFunc(factorialFunc, 4)).toEqual(24);
      expect(memoFunc(factorialFunc, 144)).not.toEqual(24);
    })

    test("Is it memoized and factorial function defined?", () => { 
      const memoFunc = memo();
      expect(memoFunc).toBeDefined();
      expect(factorialFunc).toBeDefined();
    })

    it("When we passing 0 value to factorial function, throws an error?", () => { 
      /* expect.assertions(2);

      try {
        factorialFunc(0);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Value given must be greater than 0!");
      } */

      expect(() => factorialFunc(0)).toThrow("Value given must be greater than 0!");
    })
  })