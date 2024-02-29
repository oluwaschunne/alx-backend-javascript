const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');
const app = require('./api');

describe('Index Page', () => {
  it('should have correct status code', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should have correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
