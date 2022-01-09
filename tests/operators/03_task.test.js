const {sumPositiveNumbers} = require('../../operators');

describe('checkNumber', () => {
    test('check even', () => {
        expect(sumPositiveNumbers(4, 5, -4)).toBe(9);
    })
    test('check not even', () => {
        expect(sumPositiveNumbers(3,3)).toBe(6)
    })
})