const greeting = require('../src/greeting')

describe('The function greeting', () => {
    it('should greet Zairiña', () => {
        expect(greeting()).toEqual('Hola Zairiña')
    })
})