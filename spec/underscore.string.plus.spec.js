var chai = require("chai");
var _ = require("underscore");
var s = require('underscore.string');
_.extend(s, require('../src/underscore.string.plus'));

describe("underscore.string.plus", function() {
  it("should lowerize", function() {
    chai.expect(s.lowerize("FooBar")).to.equal("fooBar");
  });

  it("should check if is url", function() {
    chai.expect(s.isUrl("http://www.foo.bar")).to.be.true;
  });

  it("should split in two sentences", function() {
    chai.expect(s.splitInTwoSentences("Hello. World")).to.deep.equal(["Hello. ", "World"])
  });
});
