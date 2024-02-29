const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');
const app = require('./api');

describe('Cart Page', () => {
  it('should have correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should have correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should have correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
