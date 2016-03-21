var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

// Demo Apple stock quote
// http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL

describe('get /stock-quote/:symbol', function(){
  it('should get the latest stock quote for a symbol', function(done){
    request(app)
      .get('/stock-quote/ibm')
      .end(function(___, res){
        expect(res.body).to.have.property('payload').to.be.above(10);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
