var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

// Chai Documentation
// http://chaijs.com/api/bdd/

// Demo getting 5, 16-bit random numbers
// https://qrng.anu.edu.au/API/jsonI.php?length=5&type=uint16

describe('get /sum-random-numbers/:num', function(){
  it('request N number of random numbers and sum them up', function(done){
    request(app)
      .get('/sum-random-numbers/7')
      .end(function(___, res){
        expect(res.body).to.have.property('payload').to.be.above(0);
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
