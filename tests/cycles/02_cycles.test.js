const {primeNumber} = require ('../../cycles');

describe('primeNumber', () => {
    test('not prime', () => {
        expect(primeNumber(4)).toBe(false);
    })
    test('prime', () => {
        expect(primeNumber(7)).toBe(true);
    })

})
