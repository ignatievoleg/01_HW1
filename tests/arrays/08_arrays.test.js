const {swap} = require('../../arrays');

describe('swap', () => {
    test('swap', () => {
        expect(swap([1, 2, 3, 4])).toStrictEqual([3, 4, 1, 2])
    })
    test('swap', () => {
        expect(swap([1, 2, 3, 4, 5])).toStrictEqual([4, 5, 3, 1, 2])
    })
})