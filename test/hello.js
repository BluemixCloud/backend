var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('get /hello', function(){
  it('should send back world', function(done){
    request(app)
      .get('/hello')
      .end(function(___, res){
        expect(res.body).to.have.property('payload', 'world');
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
