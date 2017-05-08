const assert = require('assert');
var countAllFromTown = require('./countAllFromTown.js')
describe('countAllFromTown', function() {
  it("should return 'Town.length' when given 'countReg.startsWith(location)'", function() {
    assert.equal(countAllFromTown('regNumber, location'), 0);
  });
});
