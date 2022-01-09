const {grade} = require('../../operators');

describe('grade', () => {
    test('check "f"', () => {
        expect(grade(14)).toBe('f')
    })
    test('check "e"', () => {
        expect(grade(25)).toBe('e')
    })
    test('check "d"', () => {
        expect(grade(50)).toBe('d')
    })
    test('check "c"', () => {
        expect(grade(65)).toBe('c')
    })
    test('check "b"', () => {
        expect(grade(80)).toBe('b')
    })
    test('check "a"', () => {
        expect(grade(90)).toBe('a')
    })
    test('check "error"', () => {
        expect(grade(101)).toBe('error')
    })


})