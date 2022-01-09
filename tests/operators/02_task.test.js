const {coor} = require ('../../operators');

describe('coor', () => {
    test('check first quarter', () => {
        expect(coor(1,2)).toBe('first quarter')
    })
    test('check second quarter', () => {
        expect(coor(-2,3)).toBe('second quarter')
    })
    test('check third quarter', () => {
        expect(coor(-3,-6)).toBe('third quarter')
    })
    test('check fourth quarter', () => {
        expect(coor(1, -4)).toBe('fourth quarter')
    })
    test('check axis x', () => {
        expect(coor(1, 0)).toBe('axis x')
    })
    test('check axis y', () => {
        expect(coor(0,2)).toBe('axis y')
    })
    test('check centre', () => {
        expect(coor(0,0)).toBe('centre')
    })
})
