const express = require('express');

const app = express();

app.listen(7865, () => {
  console.log('API available on http://localhost:7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', express.json(), (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

module.exports = app;
