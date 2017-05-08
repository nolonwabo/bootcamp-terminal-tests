const assert = require('assert');
var yearsAgo = require('./yearsAgo.js')
describe('yearsAgo', function() {
  it("should return 'new Date' when given 'date.getFullYear( )'", function() {
    assert.equal(yearsAgo('2000'), 17);
  });
});
