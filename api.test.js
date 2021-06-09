var request = require("supertest");
var should = require("should");

describe("hoge", function () {
  this.timeout(10000);
  var agent = request.agent("https://example.com");

  it("test case1", function (done) {
    agent
      .post("/hoge")
      .send({
        name: "tester",
      })
      .then((res) => {
        res.statusCode.should.eql(422);
        done();
      })
      .catch(done);
  });

  it("test case2", function (done) {
    agent
      .post("/hoge")
      .send({
        name: "john",
      })
      .then((res) => {
        res.statusCode.should.eql(200);
        done();
      })
      .catch(done);
  });
});
