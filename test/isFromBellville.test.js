const assert = require('assert');
var reg = require('./isFromBellville.js')
describe("isFromBellville function", function(){
  it("should return 'true' when given 'regNum.startsWith('CY')'", function(){
     assert.equal(reg('CY 286669'), true);
  })
})
