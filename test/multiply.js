var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('get /multiply/:x/:y', function(){
  it('should multiply two numbers', function(done){
    request(app)
      .get('/multiply/3/4')
      .end(function(___, res){
        expect(res.body).to.have.property('payload', 12);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
