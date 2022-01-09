const {sumOddIndex} = require('../../arrays');

describe('sumOddIndex', () => {
    test('sumOddIndex', () => {
        expect(sumOddIndex([-1, -2, -3, 7, -5])).toBe(5)
    })
})