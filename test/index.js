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
