var assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("http://35.238.56.223:8088/v1/user/1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.user_id).to.equals(1);
        //expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });
});