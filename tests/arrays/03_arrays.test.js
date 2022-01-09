const {arrayMinIn} = require('../../arrays');

describe('arrayMinIn', () => {
    test('arrayMinIn', () => {
        expect(arrayMinIn([1,2,3,-5,0])).toBe(3)
    })
})