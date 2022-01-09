const {factorial} = require('../../cycles');

describe('factorial', () => {
    test('factorial', () => {
        expect(factorial(5)).toBe(120);
    })
})