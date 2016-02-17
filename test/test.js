var code = require('../main.js')
var expect = require('chai').expect

describe('leapYear', function() {
  it('can calculate leapness of 2016', function() {
    expect(code.leapYear(2016)).to.equal(true)
  })
})
