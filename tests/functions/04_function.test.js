const {distance} = require ('../../functions');

describe ('distance', () => {
    test('distance', () => {
        expect(distance(1,2,3,4)).toBe(2)
    })
})