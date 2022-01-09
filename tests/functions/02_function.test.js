const {getStringView} = require('../../functions');

describe('getStringView', () => {
    test('check false', () => {
        expect(getStringView('1234')).toBe(false)
    })
    test('units', () => {
        expect(getStringView(5)).toBe('five')
    })
    test('tenths', () => {
        expect(getStringView(11)).toBe('eleven')
    })
    test('dozens', () => {
        expect(getStringView(25)).toBe('twenty five')
    })
    test('hundreds', () => {
        expect(getStringView(125)).toBe('one hundred twenty five')
    })

})