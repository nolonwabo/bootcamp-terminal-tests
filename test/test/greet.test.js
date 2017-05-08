
const assert = require('assert');
var greet = require("../greet")
describe("greet function",function(){
  it("greet Sivu",function(){
    assert.equal(greet("Sivu"),"Hello, Sivu")
  })
})
