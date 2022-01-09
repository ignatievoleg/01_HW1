const {arrayMaxIn} = require('../../arrays');

describe('arrayMaxIn', () => {
    test('arrayMaxIn', () => {
        expect(arrayMaxIn([1,2,3,-5,0])).toBe(2)
    })
})