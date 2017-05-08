const assert = require('assert');
var isFromCapeTown = require('./regCheck.js')
describe('isFromCapeTown', function() {
  it("should return 'true' when given 'capeTown.startsWith('CA')'", function() {
    assert.equal(isFromCapeTown('CA 286669'), true);
  });
});
