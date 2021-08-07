const { capitalize, reverseString, calculator, caesar, analyze } = require('./practice');

test('capitalize first letter of string', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});

test('reverses string', () => {
    expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test('calculator', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.divide(2, 2)).toBe(1);
});

test('caesar', () => {
    expect(caesar(1, 'Hello World!')).toBe('Ifmmp Xpsme!');
    expect(caesar(1, 'Zebra')).toBe('Afcsb');
});

test('array analysis', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual(
        {
          average: 4,
          min: 1,
          max: 8,
          length: 6
        })
});

