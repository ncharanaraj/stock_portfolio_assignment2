const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to stock portfolio analysis API');
});

// Q1 Calculate the returns of the stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;

  let returns = (marketPrice - boughtAt) * quantity;
  res.send(returns.toString());
});

// Q2 Calculate the total returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let returns = stock1 + stock2 + stock3 + stock4;
  res.send(returns.toString());
});

// Q3 Calculate the return percentage

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Q4 calculate the total return percentage

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let returns = stock1 + stock2 + stock3 + stock4;
  res.send(returns.toString());
});

// Q5 Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;

  let result;
  if (returnPercentage > 0) {
    result = 'Profit';
  } else {
    result = 'Loss';
  }

  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
