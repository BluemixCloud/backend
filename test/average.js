var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('post /average', function(){
  it('should find the average from a list of numbers', function(done){
    request(app)
      .post('/average')
      .send({numbers: [3, 5, 7, 9]})
      .end(function(___, res){
        expect(res.body).to.have.property('payload', 6);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
