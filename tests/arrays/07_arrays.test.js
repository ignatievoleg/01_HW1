const {oddElementArray} = require('../../arrays');

describe('oddElementArray', () => {
    test('oddElementArray', () => {
        expect(oddElementArray([1, 2, 3, 4, 5, -6, -7, -8, -9, 1, 1])).toBe(7)
    })
})