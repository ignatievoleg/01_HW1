const {checkNumber} = require('../../operators');

describe('checkNumber', () => {
    test('multiplication', () => {
        expect(checkNumber(2,5)).toBe(10)
    })
    test('addition', () => {
        expect(checkNumber(3, -5)).toBe(-2)
    })
})