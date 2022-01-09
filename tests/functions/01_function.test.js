const {stringDay} = require ('../../functions');

describe('stringDay', () => {
    test('check Monday', () => {
        expect(stringDay(1)).toBe('Monday')
    })
    test('check Tuesday', () => {
        expect(stringDay(2)).toBe('Tuesday')
    })
    test('check Wednesday', () => {
        expect(stringDay(3)).toBe('Wednesday')
    })
    test('check Thursday', () => {
        expect(stringDay(4)).toBe('Thursday')
    })
    test('check Friday', () => {
        expect(stringDay(5)).toBe('Friday')
    })
    test('check Saturday', () => {
        expect(stringDay(6)).toBe('Saturday')
    })
    test('check Sunday', () => {
        expect(stringDay(7)).toBe('Sunday')
    })
    test('check anythink', () => {
        expect(stringDay(123)).toBe('Введите номер дня недели!')
    })

})

