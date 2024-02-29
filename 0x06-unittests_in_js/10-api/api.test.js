const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');
const app = require('./api');

describe('Login Endpoint', () => {
  it('should return correct message for POST /login', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'JohnDoe' }
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome JohnDoe');
        done();
      }
    );
  });

  // Add other tests as needed
});

describe('Available Payments Endpoint', () => {
  it('should return correct JSON for GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedJson = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedJson);
      done();
    });
  });
});
