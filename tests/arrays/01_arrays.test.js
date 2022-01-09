const {arrayMin} = require('../../arrays');

describe('arrayMin', () => {
    test('arrayMin', () => {
        expect(arrayMin([1,2,3,-5,0])).toBe(-5)
    })
})