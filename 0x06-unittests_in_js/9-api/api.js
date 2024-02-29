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
