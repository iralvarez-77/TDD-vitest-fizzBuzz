import { describe, expect, it } from 'vitest';

const fizzBuzz = number => {
  //aquí se refactoriza
	// if ( typeof number !== 'number') throw new Error()
	// if ( number === undefined ) throw new Error()
	// if ( number < 0 ) throw new Error()
	// if ( number === 0 ) throw new Error()
	// if ( !number % 1 == 0 ) throw new Error()
	if ( isNaN(number) || number < 0 || number === 0 || !Number.isInteger(number)) throw new Error()
	if ( number % 15 === 0 ) return "fizzBuzz"
	if ( number % 3 === 0 ) return "fizz"
	if ( number % 5 === 0 ) return "buzz"

	return number
	
};

describe('fizzBuzz', () => {
// 	//casos de pruebas
	it('it should be a funtion', () => {
		expect(typeof fizzBuzz).toBe('function');
	});

	it('My function should throw if a string is passed to it', () => {
		expect(() => fizzBuzz('cadena')).toThrow();
	});

	it('it should throw if NaN is passed to it', () => {
		expect(() => fizzBuzz(NaN)).toThrow();
	});

	it('My function should throw if undefined is passed to it', () => {
		expect(() => fizzBuzz(undefined)).toThrow();
	});

	it('My function should throw if a negative number is passed to it', () => {
		expect(() => fizzBuzz(-2)).toThrow();
	});

	it('My function should throw if a zero is passed to it', () => {
		expect(() => fizzBuzz(0)).toThrow();
	});

	it('My function should throw if a decimal number is passed to it', () => {
		expect(() => fizzBuzz(3.4)).toThrow();
	});

	it('My function should return Fizz if a number multiple of 3 is passed to it', () => {
		expect(fizzBuzz(3)).toBe("fizz");
		expect(fizzBuzz(6)).toBe("fizz");
		expect(fizzBuzz(9)).toBe("fizz");
	});

	it('My function should return Buzz if a number multiple of 5 is passed to it', () => {
		expect(fizzBuzz(5)).toBe("buzz");
		expect(fizzBuzz(10)).toBe("buzz");
	});

	it('My function should return fizzBuzz if a number multiple of 3 and 5 is passed to it', () => {
		expect(fizzBuzz(15)).toBe("fizzBuzz");
		expect(fizzBuzz(30)).toBe("fizzBuzz");
	});

	it('My function should return a number when the parameter is not a multliple of 3 or 5', () => {
		expect(fizzBuzz(1)).toBe(1);
		expect(fizzBuzz(4)).toBe(4);
	});

});
