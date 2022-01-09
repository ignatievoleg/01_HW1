const {rootOfNumber} = require ('../../cycles');

describe('rootOfNumber', () => {
    test('rootOfNumber', () => {
        expect(rootOfNumber(30)).toBe(5);
    })
    test('rootOfNumber', () => {
        expect(rootOfNumber(25)).toBe(5)
    })
})