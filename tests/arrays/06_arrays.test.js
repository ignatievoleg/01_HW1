const {reverseArray} = require('../../arrays');

describe('reverseArray', () => {
    test('reverseArray', () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toBe('5,4,3,2,1')
    })
})