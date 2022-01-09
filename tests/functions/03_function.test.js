const {getNumberView} = require('../../functions');

describe ('getNumberView', () => {
    test('check false', () => {
        expect(getNumberView(123)).toBe(false)
    })
    test('check units', () => {
        expect(getNumberView('one')).toBe(1)
    })
    test('check tenths', () => {
        expect(getNumberView('eleven')).toBe(11)
    })
    test('check dozens', () => {
        expect(getNumberView('twenty five')).toBe(25)
    })
    test('check hundreds', () => {
        expect(getNumberView('one hundred twenty five')).toBe(125)
    })
    test('check thousand', () => {
        expect(getNumberView('five thousand one hundred twenty five')).toBe(5125)
    })

})