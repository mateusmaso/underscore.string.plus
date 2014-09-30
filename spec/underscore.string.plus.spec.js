var chai = require("chai");
var _ = require("underscore");
_.string = _.str = require('underscore.string');
_.extend(_.string, require('../src/underscore.string.plus'));

describe("underscore.string.plus", function() {
  it("should lowerize", function() {
    chai.expect(_.string.lowerize("FooBar")).to.equal("fooBar");
  });

  it("should check if is url", function() {
    chai.expect(_.string.isUrl("http://www.foo.bar")).to.be.true;
  });

  it("should split in two sentences", function() {
    chai.expect(_.string.splitInTwoSentences("Hello. World")).to.deep.equal(["Hello. ", "World"])
  });
});