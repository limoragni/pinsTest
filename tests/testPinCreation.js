const assert     = require('assert')
const createPins = require('../index.js')
const expect     = require("chai").expect

describe('Testing function', () => {
    it('should return two numbers', () => {
        const pins = createPins()
        expect(pins.length).to.equal(2)
    })
})