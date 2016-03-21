var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('get /candrink/:age/', function(){
  it('should not be legal to drink, under 21', function(done){
    request(app)
      .get('/candrink/7')
      .end(function(___, res){
        expect(res.body).to.have.property('payload', false);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('should be legal to drink, 21 or over', function(done){
    request(app)
      .get('/candrink/25')
      .end(function(___, res){
        expect(res.body).to.have.property('payload', true);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
