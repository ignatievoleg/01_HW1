const  {arrayMax} = require('../../arrays');

describe('arrayMax', () => {
    test('arrayMax', () => {
        expect(arrayMax([1,2,3,-5,0])).toBe(3)
    })
})