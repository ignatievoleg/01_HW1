const {maxNum} = require('../../operators');

describe('maxNum', () => {
    test('maxNum', () => {
        expect(maxNum(1,2,3)).toBe(9)
    })
    test('maxNum', () => {
        expect(maxNum(2,2,2)).toBe(11)
    })

})