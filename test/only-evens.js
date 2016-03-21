var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('post /only-evens', function(){
  it('should return a list of even numbers, no odds', function(done){
    request(app)
      .post('/only-evens')
      .send({numbers: [1, 3, 2, 4, 6, 9, 8]})
      .end(function(___, res){
        expect(res.body).to.have.property('payload').that.deep.equals([2, 4, 6, 8]);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
